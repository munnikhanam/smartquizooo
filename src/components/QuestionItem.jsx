import React, { useState } from "react";
import { CheckBadgeIcon, EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionItem = ({ ques, wrongAnswer, rightAnswer }) => {
  const { question, options, correctAnswer } = ques;
  const [correct, setCorrect] = useState(null);
  const [isDisable, setIsDisable] = useState(false);
  console.log(isDisable);
  //   handle correct answer
  const handleCorrectAnswer = (answer) => {
    setIsDisable(true);
    if (answer === correctAnswer) {
      rightAnswer();
      return setCorrect(true);
    } else {
      wrongAnswer();
      return setCorrect(false);
    }
  };

  const handleAnswer = () => {
    toast(correctAnswer);
  };

  return (
    <div>
      <h1 className="text-4xl bold m-4 border border-red-300 p-4">
        Here is some question:{question}
      </h1>
      <div>
        {options.map((opt, i) => (
          <ul key={i}>
            <li
              onClick={() => handleCorrectAnswer(opt)}
              //   className={isDisable ? "disabled" : ""}
            >
              <CheckBadgeIcon className="h-6 w-6 text-blue-500" />

              {opt}
            </li>
          </ul>
        ))}

        <div>
          {correct && <div className={toast("your answer")}></div>}
          {correct !== null && !correct && (
            <div>{toast("Your answer is not correct")}</div>
          )}
        </div>
        <EyeIcon
          onClick={handleAnswer}
          className="h-5 w-5 text-blue-500"
        ></EyeIcon>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default QuestionItem;
