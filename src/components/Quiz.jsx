import { useState } from "react";
import QUESTIONS from "../question.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevData) => {
      return [...prevData, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((x) => (
            <li className="answer" key={x}>
              <button onClick={() => handleSelectAnswer(x)}>{x}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
