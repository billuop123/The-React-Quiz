import { useQuiz } from "./App";
import Option from "./Option";
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  if (!question) return null;
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />;
    </div>
  );
}

export default Question;
//refactored using context api and context api