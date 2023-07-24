"use client";
import { useState, useEffect } from "react";

//Need a way to match the value of the radio input to the text input for
//the answers, somehow

const answer_choice_card = (num) => {};

const Quiz_Form_Card = ({ data, qNum }) => {
  const aNums = [1, 2, 3, 4];
  return (
    <div className="text-black flex flex-col mt-2 mx-6 md:mx-16 lg:mx-24 border-2 border-blue-400 rounded-lg bg-white min-w-min">
      {/* Quiz Question */}

      <div className=" flex bg-white rounded-t-lg border-b-2 border-blue-400">
        <div className="w-full "></div>
        <label className="">
          <input
            name={"ques_" + qNum}
            className="my-2 text-center"
            placeholder="Enter the question"
          ></input>
        </label>
        <div className="w-full"></div>
      </div>

      {/* Quiz Answers */}

      <div className="sm:flex sm:flex-col justify-center bg-white  rounded-b-lg">
        {/* Using the empty divs with w-full to fill out input fields*/}
        {aNums.map((q, index) => (
          <div className="flex my-1" key={"container_" + q + "_" + index}>
            <div className="w-full"></div>
            <label>
              <input
                name={"ques_" + qNum + "_text_a" + q}
                className="  text-center"
                placeholder={`Enter answer choice ${q}`}
              ></input>
            </label>
            <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
              <input type="radio" name={"quesAns_" + qNum} value={q}></input>
            </div>
          </div>
        ))}

        {/* Tag input */}
        <div className="py-1 flex justify-center border-t-2 border-blue-400 ">
          <input
            name={"ques_" + qNum + "_tag"}
            className="text-center text-black min-w-full"
            placeholder="Enter the question tag"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Quiz_Form_Card;
