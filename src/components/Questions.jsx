import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuestionItem from "./QuestionItem";

const Questions = () => {
  const loderData = useLoaderData();
  const allQuestion = loderData.data.questions;
  console.log(allQuestion);
  const [answer, setAnswer] = useState({ currectAnswer: 0, wrongAnswer: 0 });

  const rightAnswer = () =>
    setAnswer((prev) => ({
      ...prev,
      currectAnswer: prev.currectAnswer + 1,
    }));
  const wrongAnswer = () =>
    setAnswer((prev) => ({
      ...prev,
      wrongAnswer: prev.wrongAnswer + 1,
    }));
  return (
    <div>
      <div>
        <h1>This is question</h1>
        {allQuestion.map((ques) => (
          <QuestionItem
            rightAnswer={rightAnswer}
            wrongAnswer={wrongAnswer}
            key={ques.id}
            ques={ques}
          />
        ))}
      </div>
      <div>
        <div className="flex">
          <h3>Total Question :</h3>
          <h3>{allQuestion.length}</h3>
        </div>
        <div className="flex">
          <h3>Total Right : </h3>
          <h3>{answer.currectAnswer}</h3>
        </div>
        <div className="flex">
          <h3>Total worng : </h3>
          <h3>{answer.wrongAnswer}</h3>
        </div>
      </div>
    </div>
  );
};

export default Questions;
