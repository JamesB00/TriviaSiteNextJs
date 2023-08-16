"use client";
import { Container } from "postcss";
import { useState, useEffect } from "react";
import Quiz_Search_Card from "@components/Quiz_Search_Card";

const SearchQuizCards = ({ data, search, searchStatus }) => {
  if (search == "") {
    return (
      <div className="flex justify-center">
        <p>Type in a tag to find your next quiz!</p>
      </div>
    );
  }
  if (data.quizzes == undefined) {
    return;
  }
  if (Object.values(data.quizzes).length == 0) {
    return (
      <div className="flex justify-center">
        <p>No results found for "{search}"</p>
      </div>
    );
  } else {
    return Object.values(data.quizzes).map((elem, index) => (
      <Quiz_Search_Card
        quizTitle={elem.title}
        quizCreator={elem.creator}
        quizTag={elem.tag}
        key={"searchCard_" + index}
      ></Quiz_Search_Card>
    ));
  }
};

const Quiz_Search_Form = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [toggleSearching, setToggleSearching] = useState(false);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const getQuizzes = async (searchTxt) => {
    if (searchTxt == "") {
      return;
    }
    setToggleSearching((prev) => !prev);
    const res = await fetch(`/api/searchQuizzes/${searchTxt}`, {
      method: "GET",
    });
    const data = await res.json();

    setSearchResults(data);
    setToggleSearching((prev) => !prev);
  };

  useEffect(() => {
    //Use a timout to not constantly be pulling from database on every character change
    const timeOutId = setTimeout(() => {
      getQuizzes(searchText);
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [searchText]);

  return (
    <section className="my-2 mx-16 lg:mx-32">
      {/* Search Input Bar */}
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

      {/* Search Results */}
      <div className="bg-white rounded-md text-black flex flex-col justify-center">
        <SearchQuizCards
          data={searchResults ? searchResults : null}
          search={searchText}
          status={toggleSearching}
        />
      </div>
      <br />

      {/* Button to load more results */}
      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-400 rounded-lg p-1">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Quiz_Search_Form;
