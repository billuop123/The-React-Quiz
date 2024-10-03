import Option from "./Option";
function Question({ question, dispatch, answer }) {
  if (!question) return null;
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />;
    </div>
  );
}

export default Question;
