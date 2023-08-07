"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Quiz_Form_Card from "@components/Quiz_Form_Card";

const Quiz_Q_List = ({ qCards }) => {
  if (qCards == []) {
    return <div className="bg-blue-600">Hi</div>;
  } else {
    //console.log(qCards);
    return qCards.map((q, index) => (
      <Quiz_Form_Card
        key={`ques_${index}_card`}
        data={null}
        qNum={index}
      ></Quiz_Form_Card>
    ));
  }
};

const Quiz_Form = ({ data }) => {
  const [qInputCards, setQInputCards] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const { data: session } = useSession();

  const updateTitle = (e) => {
    setQuizTitle(e.target.value);
  };

  const getData = async () => {
    const arr = [];
    if (!quizTitle) {
      alert("Must name the quiz");
      return;
    }
    arr.push([quizTitle]);
    if (qInputCards.length == 0) {
      alert("Must be composed of at least one question");
      return;
    }
    arr.push(session.user.email);
    for (let j = 0; j < qInputCards.length; j++) {
      //all answers
      const arr2 = [];
      for (let i = 1; i < 5; i++) {
        const curr = document.querySelector(`input[name=ques_${j}_text_a${i}]`);
        if (!curr.value) {
          alert("Must fill out the answer choices to all questions.");
          return;
        }
        arr2.push(curr.value);
      }

      //correct answer
      const selAns = document.querySelector(`input[name=quesAns_${j}]:checked`);
      if (selAns == null) {
        alert("Must select the correct answer to every question.");
        return;
      }
      const corrAns = document.querySelector(
        `input[name=ques_${j}_text_a${selAns.value}]`
      );

      //question
      const ques = document.querySelector(`textarea[name=ques_${j}]`);

      //tag
      const tag = document.querySelector(`input[name=ques_${j}_tag]`);

      //Final check for question and tag
      if (!ques || !tag.value) {
        alert(
          "Please enter responses for all fields, including question and tag."
        );
        return;
      }
      arr.push([ques.value, arr2, tag.value, corrAns.value]);
    }
    const res = await fetch(`/api/quiz/submit`, {
      method: "POST",
      body: JSON.stringify(arr),
    });
    console.log(res);
  };

  const addCard = () => {
    setQInputCards((prev) => [...prev, []]);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex mx-auto">
        <p>Quiz Title</p>
      </div>

      {/* Input for Quiz Title */}
      <div className="flex mx-auto">
        <div className="bg-white rounded-l-lg w-5"></div>
        <label>
          <input
            className="text-center text-black focus:outline-none h-10"
            placeholder="Enter a Title for the Quiz"
            onChange={updateTitle}
          ></input>
        </label>
        <div className="bg-white rounded-r-lg w-5"></div>
      </div>

      {/* Render the list of question cards */}
      <Quiz_Q_List qCards={qInputCards}></Quiz_Q_List>

      {/* Button to add a new question card */}
      <div className="flex justify-center">
        <button
          onClick={addCard}
          className="mt-2 w-6 rounded-md bg-white text-black"
        >
          +
        </button>
      </div>

      {/* Button to submit quiz */}
      <div className="flex justify-center">
        <button className="mt-2 p-1 rounded-md bg-green-600" onClick={getData}>
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz_Form;
