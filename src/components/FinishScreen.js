function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored<strong> {points}</strong> out of the {totalPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <h3>HighScore {highScore}</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset Button
      </button>
    </>
  );
}

export default FinishScreen;
