import React, { useState } from "react";
import questions from "../../resources/quizQuestion.json";
import { Link, useNavigate } from "react-router-dom";

function QuizComponent() {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptedScore, setAttemptedScore] = useState(0)

  const checkAnswer = (selectedOption) => {
    const currentQuestion = questions[questionNo];
    if (currentQuestion.answer === selectedOption) {
      window.alert("Right Answer!");
      setScore(score + 1);
      setAttemptedScore(attemptedScore + 1) 
    } else {
      setAttemptedScore(attemptedScore + 1)
      window.alert("Wrong Answer!");
    }
    setQuestionNo(questionNo + 1);
    console.log(questionNo);
    if (questionNo === 14) {
      window.alert("Click Finish to end the quiz!");
      localStorage.setItem("score", score);
      localStorage.setItem("attempted", attemptedScore);
      navigate("/ResultComponent");
    }
  };
  const handleFinish = () => {
      localStorage.setItem("score", score);
      localStorage.setItem("attempted", attemptedScore);
      navigate("/ResultComponent");
    }

  const handleQuit = () => {
    const isConfirmed = window.confirm("Are you sure you want to quit?");
    if (isConfirmed) {
      localStorage.setItem("score", score);
      localStorage.setItem("attempted", attemptedScore);
      navigate("/ResultComponent");
      window.location.href = "/";
    }

  };

  const currentQuestion = questions[questionNo];

  return (
    <div className="main">
      <div className="Box">
        <h1>Question</h1>
        <div className="no">
          <span>{questionNo + 1} </span>
          of <span>{questions.length}</span>
        </div>
        <div className="ques">{currentQuestion.question}</div>

        <div className="options">
          <div
            className="option"
            onClick={() => checkAnswer(currentQuestion.optionA)}
          >
            {currentQuestion.optionA}
          </div>
          <div
            className="option"
            onClick={() => checkAnswer(currentQuestion.optionB)}
          >
            {currentQuestion.optionB}
          </div>
          <div
            className="option"
            onClick={() => checkAnswer(currentQuestion.optionC)}
          >
            {currentQuestion.optionC}
          </div>
          <div
            className="option"
            onClick={() => checkAnswer(currentQuestion.optionD)}
          >
            {currentQuestion.optionD}
          </div>
        </div>

        <div className="controls">
          <button
            className="previous"
            disabled={questionNo === 0}
            onClick={() => setQuestionNo(questionNo - 1)}
          >
            Previous
          </button>
          <button
            className="next"
            disabled={questionNo === questions.length - 1}
            onClick={() => setQuestionNo(questionNo + 1)}
          >
            Next
          </button>
          <button className="quit" onClick={handleQuit}>
            Quit
          </button>
            <button className="Finish" onClick={handleFinish}>Finish</button>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
