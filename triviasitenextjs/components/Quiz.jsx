"use client";
import React, { useState, useEffect } from "react";
import Quiz_Card from "./Quiz_Card";
import triviaqs from "../public/triviaqs.json";

const Quiz_Card_List = ({ questions, graded, gradedInfo }) => {
  const qs = questions;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-lg">Quiz</div>
      <div className="gap-3 lg:gap-4 flex flex-col lg:container lg:mx-auto">
        {qs.map((ques, index) => (
          <Quiz_Card
            key={"question" + `_${index}`}
            question={ques.question}
            answers={ques.answers}
            quesNo={index}
            tag={ques.tag}
            status={[graded, gradedInfo[index]]}
          />
        ))}
      </div>
    </div>
  );
};

const Quiz = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [gradedQs, setGradedQs] = useState([]);
  const [graded, setGraded] = useState(false);
  const [score, setScore] = useState(0);

  //Maybe try to rework the graded and gradedQs to give question cards these
  //states and updating them in getAnswers, to conditionally render the colors
  //instead of using query selector. maybe a state array of refs or something similar

  const getAnswers = async () => {
    const arr = [];
    if (graded == true) {
      alert("No cheating");
      return;
    }
    //Get array composed of questions and answers to send to server
    for (let i = 0; i < questions.length; i++) {
      let ans = document.querySelector(`input[name=question_${i}]:checked`);
      if (ans == null) {
        arr.push([questions[i].question, "NoResponse"]);
        alert("There are questions with no input");
        return;
      } else {
        arr.push([
          questions[i].question,
          document.querySelector(`input[name=question_${i}]:checked`).value,
        ]);
      }
    }

    //Now we can create our own post submission for our api route
    const result = await fetch(`/api/quiz/grade`, {
      method: "POST",
      body: JSON.stringify({
        arr: arr,
      }),
    });

    const data = await result.json();

    //Get the data and set it to the gradedQs state so that the question card
    //gets automatically updated
    for (let i = 0; i < questions.length; i++) {
      setGradedQs((gradedQs) => gradedQs.concat([data[i]]));
      if (data[i][0] == "correct") {
        setScore((prev) => (prev += 1));
      }
    }
    console.log(gradedQs);
    setGraded((prev) => !prev);
  };

  useEffect(() => {
    const qSetup = async () => {
      const data = await fetch(`/triviaqs.json`);
      const qs = await data.json();

      setQuestions(qs);
    };
    qSetup();
  }, []);

  //console.log(questions);
  return (
    <section className="">
      {graded ? (
        <div className="flex justify-center bg-blue-400">
          Your score: {score} / {questions.length}
        </div>
      ) : (
        <div></div>
      )}

      <form id="currQuiz">
        <Quiz_Card_List
          questions={questions}
          graded={graded}
          gradedInfo={gradedQs}
        />
      </form>
      <div className="flex justify-center">
        <button
          className="bg-white text-black py-2 px-4 mt-2 mb-2 rounded-lg "
          onClick={getAnswers}
          disabled={graded}
          hidden={graded}
          quizId={id}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Quiz;
