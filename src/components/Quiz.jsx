import { useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} /> <h2>Quiz is complete!</h2>
      </div>
    );
  }

  // shuffledAnswers should run after if check in order to prevent crash
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); //Build in method 'sort()'

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevData) => {
      return [...prevData, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => {
            handleSelectAnswer(null); // if the time expires the answer is going to be null
          }}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((x) => (
            <li className="answer" key={x}>
              <button onClick={() => handleSelectAnswer(x)}>{x}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
