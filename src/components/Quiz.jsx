import React from "react";
import QuizDetails from "./QuizDetails";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const mainData = useLoaderData();
  const quizData = mainData.data;
  console.log(mainData);
  return (
    <div className="grid gap-6 row-gap-5 mb-8  lg:grid-cols-4 sm:grid-cols-2 ">
      {quizData.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
