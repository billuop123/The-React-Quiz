import { useEffect } from "react";
import { useQuiz } from "./App";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
//refactored using context api and context api
