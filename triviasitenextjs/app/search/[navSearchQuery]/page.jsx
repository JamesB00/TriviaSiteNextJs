"use client";
import { useState, useEffect } from "react";
import componentDidMount from "react";
import Quiz_Search_Form from "@components/Quiz_Search_Form";

const page = ({ params }) => {
  return (
    <Quiz_Search_Form paramText={params.navSearchQuery}></Quiz_Search_Form>
  );
};

export default page;
