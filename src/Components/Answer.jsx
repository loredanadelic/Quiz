import { useEffect, useState } from "react";
import style from "./Answer.module.css";
const Answer = ({ answer, click, i, disable }) => {
  return (
    <div className={style.answer}>
      <button className={style.answerBtn}
        style={
            answer.clicked ? { backgroundColor: "rgb(89, 207, 213)"}: {}
        }
        disabled={disable ? 'disabled': ''}
        
        onClick={() => {
          click(answer.correct, i);
        }}
      >
        {answer.text}
      </button>

      {answer.clicked && answer.correct && (
        <img className={style.img} src="checked.png" />
      )}
      {answer.clicked && !answer.correct && (
        <img className={style.img} src="unchecked.png" />
      )}
    </div>
  );
};

export default Answer;
