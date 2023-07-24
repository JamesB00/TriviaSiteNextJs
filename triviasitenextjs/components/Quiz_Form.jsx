"use client";
import { useState, useEffect } from "react";
import Quiz_Form_Card from "@components/Quiz_Form_Card";

const Quiz_Q_List = ({ qCards }) => {
  if (qCards == []) {
    return <div className="bg-blue-600">Hi</div>;
  } else {
    console.log(qCards);
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

  const getData = () => {
    //For now, just getting all of the information using query select
    //for the eventual submission to server. may go back and change
    //cards to use state here and pass info up to easily collect it
    //in this function.
    const arr = [];
    for (let j = 0; j < qInputCards.length; j++) {
      //correct answer
      const selAns = document.querySelector(
        `input[name=quesAns_${j}]:checked`
      ).value;
      const corrAns = document.querySelector(
        `input[name=ques_${j}_text_a${selAns}]`
      ).value;

      //all answers
      const arr2 = [];
      for (let i = 1; i < 5; i++) {
        arr2.push(
          document.querySelector(`input[name=ques_${j}_text_a${i}]`).value
        );
      }

      //question
      const ques = document.querySelector(`input[name=ques_${j}]`).value;

      //tag
      const tag = document.querySelector(`input[name=ques_${j}_tag]`).value;
      arr.push([ques, arr2, tag, corrAns]);
    }

    console.log(arr);
  };

  const addCard = () => {
    setQInputCards((prev) => [...prev, []]);
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

      <Quiz_Q_List qCards={qInputCards}></Quiz_Q_List>
      <div className="flex justify-center">
        <button
          onClick={addCard}
          className="w-6 rounded-md bg-white text-black"
        >
          +
        </button>
      </div>

      <button onClick={getData}>Click this one fr</button>
    </div>
  );
};

export default Quiz_Form;
