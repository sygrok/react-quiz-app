import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((x) => x === null);
  const correctAnswers = userAnswers.filter(
    (x, index) => x === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Sınav Tamamlandı!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Boş</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Doğru</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Yanlış</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((x, index) => {
          let style = "user-answer";
          if (x === null) {
            style += " skipped";
          } else if (x === QUESTIONS[index].answers[0]) {
            style += " correct";
          } else {
            style += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={style}>{x ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
