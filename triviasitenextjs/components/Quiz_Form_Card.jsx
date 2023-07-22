"use client";
import { useState, useEffect } from "react";

//Need a way to match the value of the radio input to the text input for
//the answers, somehow

const Quiz_Form_Card = ({ data, qNum }) => {
  const aNums = [1, 2, 3, 4];
  return (
    <div className="text-black flex flex-col my-2 mx-6 md:mx-16 lg:mx-24 border-2 border-blue-400 rounded-lg bg-white min-w-min">
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

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              name={"ques_" + qNum + "_text_a1"}
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input type="radio" name={"quesAns_" + qNum} value="1"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              name={"ques_" + qNum + "_text_a2"}
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4 flex">
            <input name={"quesAns_" + qNum} type="radio" value="2"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              name={"ques_" + qNum + "_text_a3"}
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input name={"quesAns_" + qNum} type="radio" value="3"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              name={"ques_" + qNum + "_text_a4"}
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input name={"quesAns_" + qNum} type="radio" value="4"></input>
          </div>
        </div>

        {/* Tag input */}
        <button onClick={() => console.log(question)}>Click this one</button>
      </div>
    </div>
  );
};

export default Quiz_Form_Card;
