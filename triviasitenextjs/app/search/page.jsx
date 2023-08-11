"use client";
import { Container } from "postcss";
import { useState, useEffect } from "react";
import Quiz_Card from "@components/Quiz_Card";

//Not technically sure if this dynamic routing is correct, but it seems to be working fine

const search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const getQuizzes = async (searchTxt) => {
    const res = await fetch(`/api/searchQuizzes/${searchTxt}`, {
      method: "GET",
    });
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => getQuizzes(searchText), 1000);
    return () => clearTimeout(timeOutId);
    //Here, I'll need to make an api request to get quizzes back to populate the page with
    //by way of setting the quizResults state
  }, [searchText]);

  return (
    <section className="my-2 mx-16 lg:mx-32">
      <div className="flex text-black">
        <div className="w-2 bg-white rounded-l-lg" />
        <textarea
          className="w-full text-center h-10 pt-2 resize-none"
          placeholder="Search for a quiz tag"
          onChange={handleSearchTextChange}
        ></textarea>
        <div className="w-2 bg-white rounded-r-lg" />
      </div>
      <br></br>
      <div className="bg-white rounded-md text-black flex flex-col justify-center">
        <Quiz_Card
          quizTitle={"First Title"}
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
