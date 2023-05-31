import React from "react";

const QuestionItem = ({ ques }) => {
  const { question, options, correctAnswer } = ques;
  return (
    <div>
      <h1 className="text-4xl bold m-4 border border-red-300 p-4">
        Here is some question:{question}
      </h1>
      <div>
        {options.map((opt, i) => (
          <ul key={i}>
            <li>{opt}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
