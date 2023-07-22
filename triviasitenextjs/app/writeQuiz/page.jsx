"use client";
import { useState, useEffect } from "react";
import Quiz_Form from "@components/Quiz_Form";

const writeQuiz = () => {
  const [submitting, setSubmitting] = useState(false);
  const [quizArr, setQuizArr] = useState([]);

  const subTest = async () => {
    //Disable submit button
    setSubmitting((prev) => !prev);

    //Get data for each of the questions, their answers, and the tag
    //TODO

    //Submit data above for the quiz submit api endpoint
    const res = await fetch("/api/quiz/submit", {
      method: "POST",
      body: JSON.stringify({
        testmsg: "Hey there",
      }),
    });

    //Get response and do something
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {}, []);

  //I'll either need to create new cards for each question the user
  //wants to add, or create some kind of inner form that handles it
  return (
    <div>
      <Quiz_Form data={null} />
      <button
        disabled={submitting}
        onClick={() => {
          subTest();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default writeQuiz;
