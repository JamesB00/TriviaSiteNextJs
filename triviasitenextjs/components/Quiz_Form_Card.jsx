"use client";
import { useState, useEffect } from "react";

const Quiz_Form_Card = ({ data }) => {
  return (
    <div className="flex flex-col my-2 mx-6 md:mx-16 lg:mx-24">
      {/* Quiz Title */}
      <div className="">
        <label className="">
          <input
            className="text-center w-full"
            placeholder="Enter the question"
          ></input>
        </label>
      </div>

      {/* Quiz Answers */}
      <div className="sm:flex sm:flex-col justify-center">
        {/* Using the divs with white backgrounds to fill space in larger screens*/}

        {/* First two answer options */}
        <div className="sm:flex ">
          <div className="bg-white w-full"></div>
          <label>
            <input
              className="w-full sm:w-auto text-center"
              placeholder="Enter answer choice 1"
            ></input>
          </label>
          <div className="bg-white w-full"></div>
          <label>
            <input
              className="w-full sm:w-auto text-center"
              placeholder="Enter answer choice 2"
            ></input>
          </label>
          <div className="bg-white w-full"></div>
        </div>

        {/* Last two answer options */}
        <div className="sm:flex">
          <div className="bg-white w-full"></div>
          <label>
            <input
              className="w-full sm:w-auto text-center"
              placeholder="Enter answer choice 3"
            ></input>
          </label>
          <div className="bg-white w-full"></div>
          <label>
            <input
              className="w-full sm:w-auto text-center"
              placeholder="Enter answer choice 4"
            ></input>
          </label>
          <div className="rounded-br-lg bg-white w-full"></div>
        </div>

        {/* Tag input */}
      </div>
    </div>
  );
};

export default Quiz_Form_Card;
