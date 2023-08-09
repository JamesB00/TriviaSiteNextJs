"use client";
import { Container } from "postcss";
import { useState, useEffect } from "react";
import Quiz_Card from "@components/Quiz_Card";

//Not technically sure if this dynamic routing is correct, but it seems to be working fine

const search = ({ params }) => {
  const { quizResults, setQuizResults } = useState([]);

  useEffect(() => {
    //Here, I'll need to make an api request to get quizzes back to populate the page with
    //by way of setting the quizResults state
  }, []);

  return (
    <section className="my-2 mx-16 lg:mx-32">
      <div className="bg-white rounded-md text-black flex flex-col justify-center">
        <Quiz_Card
          quizTitle={params.searchText}
          quizCreator={"me@gmail.com"}
          quizTag={"Misc"}
        ></Quiz_Card>
        <Quiz_Card
          quizTitle={"Title"}
          quizCreator={"me@gmail.com"}
          quizTag={"Misc"}
        ></Quiz_Card>
        <Quiz_Card
          quizTitle={"Title"}
          quizCreator={"me@gmail.com"}
          quizTag={"Misc"}
        ></Quiz_Card>
      </div>

      {/* Button to load more results */}
      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-400 rounded-lg p-1 m-1">
          Load More
        </button>
      </div>
    </section>
  );
};

export default search;
