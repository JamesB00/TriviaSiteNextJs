"use client";
import { useState, useEffect } from "react";
import Quiz_Form_Card from "@components/Quiz_Form_Card";

const Quiz_Form = ({ data }) => {
  const [quizData, setQuizData] = useState([]);

  const getData = () => {
    //Need to put all of these in their own loop to do it by question
    //also need things for title, tag, etc.
    const num = 0;
    const arr = [];
    const selAns = document.querySelector(
      `input[name=quesAns_${num}]:checked`
    ).value;
    const corrAns = document.querySelector(
      `input[name=ques_${num}_text_a${selAns}]`
    ).value;
    for (let i = 1; i < 5; i++) {
      arr.push(
        document.querySelector(`input[name=ques_${num}_text_a${i}]`).value
      );
    }
    console.log(corrAns);
    console.log(arr);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex mx-auto">
        <p>Quiz Title</p>
      </div>
      <div className="flex mx-auto">
        <div className="bg-white rounded-l-lg w-5"></div>
        <label>
          <input
            className="text-center focus:outline-none h-10"
            placeholder="Enter a Title for the Quiz"
          ></input>
        </label>
        <div className="bg-white rounded-r-lg w-5"></div>
      </div>

      <Quiz_Form_Card data={null} qNum={0}></Quiz_Form_Card>
      <button onClick={getData}>Click this one fr</button>
    </div>
  );
};

export default Quiz_Form;
