import React from "react";
import Quiz from "@components/Quiz";

const page = ({ params }) => {
  return <Quiz id={params.id}></Quiz>;
};

export default page;
