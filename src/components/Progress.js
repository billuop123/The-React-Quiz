function Progress({ points, index, numQuestions, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question<strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{totalPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
