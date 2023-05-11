import { useEffect, useState } from "react";
import Answer from "./Answer";
import style from "./Questions.module.css";
import { swap } from "../utils";

const Question = ({ question, setPosition, setResult, position, setEnd, end, selectedNumber }) => {
  const [answers, setAnswers] = useState([]);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    const ans = question["incorrect_answers"].map((a) => ({
      text: a,
      correct: false,
      clicked: false,
    }));
    ans.push({
      text: question["correct_answer"],
      correct: true,
      clicked: false,
    });
    if (ans.length > 2) {
      const randomIndex = Math.floor(Math.random() * 4);
      swap(randomIndex, ans);
    } else {
      if (ans[1].text == "True") {
        swap(0, ans);
      }
    }
    setAnswers(ans);
  }, [question.question]);


  const handleClick = (data, i) => {
    const newAns = [...answers];
    newAns[i].clicked = true;
    setAnswers(newAns);
    setDisable(true);
    if (data && !end) {
      setResult((prev) => prev + 1);
    }
    if (position < selectedNumber-1) {
      setTimeout(() => {
        setPosition((prev) => prev + 1);
        setDisable(false);
      }, 1000);
    } else {
      setEnd(true);
      setDisable(false);
    }
  };

  return (
    <div className={style.question}>
      <div className={style.questionTitle}>
        <h2>Pitanje 0{position + 1}:</h2>
        <h2>{question.question}</h2>
      </div>
      <div>
        {answers.map((answer, i) => {
          return (
            <Answer
              answer={answer}
              key={i}
              click={handleClick}
              i={i}
              disable={disable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
