"use client";
import { useState, useEffect } from "react";

const Quiz_Form_Card = ({ data, qNum }) => {
  const aNums = [1, 2, 3, 4];
  return (
    <div className="text-black flex flex-col mt-2 mx-6 md:mx-16 lg:mx-24 border-2 border-blue-400 rounded-lg bg-white min-w-min">
      {/* Quiz Question */}

      <div className=" flex bg-white rounded-t-lg border-b-2 border-blue-400">
        <div className="w-2 "></div>
        <label className="w-full justify-content-center align-middle">
          <textarea
            name={"ques_" + qNum}
            className="h-10 my-1 align-middle text-center w-full pt-2"
            placeholder="Enter the question"
          ></textarea>
        </label>
        <div className="w-2"></div>
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
      </div>
    </div>
  );
};

export default Quiz_Form_Card;
