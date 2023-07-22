"use client";
import { useState, useEffect } from "react";

const Quiz_Form_Card = ({ data }) => {
  return (
    <div className="flex flex-col my-2 mx-6 md:mx-16 lg:mx-24 border-2 border-blue-400 rounded-lg bg-white">
      {/* Quiz Question */}
      <div className=" flex bg-white rounded-t-lg border-b-2 border-blue-400">
        <div className="w-full "></div>
        <label className="">
          <input
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
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input name="ans_ques_0" type="radio"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4 flex">
            <input name="ans_ques_0" type="radio"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input name="ans_ques_0" type="radio"></input>
          </div>
        </div>

        <div className="flex my-1">
          <div className="w-full"></div>
          <label>
            <input
              className="  text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="w-full justify-center lg:justify-end lg:mr-4  flex">
            <input name="ans_ques_0" type="radio"></input>
          </div>
        </div>

        {/* Tag input */}
      </div>
    </div>
  );
};

export default Quiz_Form_Card;
