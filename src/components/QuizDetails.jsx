import React from "react";
import { useNavigate } from "react-router-dom";

const QuizDetails = ({ quiz }) => {
  const { name, logo, id } = quiz;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div>
      <div className="flex flex-row">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button onClick={handleNavigate} className="btn btn-primary">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
