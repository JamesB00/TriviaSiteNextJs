"use client";
import { useState, useEffect } from "react";
import Quiz_Form_Card from "@components/Quiz_Form_Card";

const Quiz_Form = ({ data }) => {
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
      <Quiz_Form_Card data={null}></Quiz_Form_Card>
    </div>
  );
};

export default Quiz_Form;
