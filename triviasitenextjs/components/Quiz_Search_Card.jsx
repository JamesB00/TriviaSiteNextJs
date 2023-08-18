import React from "react";
import Link from "next/link";

//This card is what is rendered for quiz search results
const Quiz_Card = ({ quizTitle, quizTag, quizCreator, quizId }) => {
  return (
    <div className="flex flex-col my-1 lg:my-4 mx-3 lg:mx-16 p-1 text-center border-2 border-black rounded-lg">
      <Link href={`/quiz/${quizId}`} shallow>
        {/* Quiz Title */}
        <div className="text-lg">
          <b>{quizTitle}</b>
        </div>

        {/* Quiz Creator */}
        <div className="">Creator: {quizCreator}</div>

        {/* Quiz Tags */}
        <div className="">Tags: {quizTag}</div>
      </Link>
    </div>
  );
};

export default Quiz_Card;
