import { useState } from "react";
import style from "./Start.module.css";

const Start = ({
  categories,
  setSelectedCategory,
  handleClick,
  setSelectedNumber,
}) => {
  return (
    <div className={style.start}>
      <form>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) => {
            setSelectedCategory({ name: e.target.value, id: e.target.value });
          }}
        >
          {categories.length < 1 && <option>Category</option>}
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <label htmlFor="number">Number of questions</label>
        <input
          type="number"
          min={3}
          max={12}
          id="number"
          defaultValue={3}
          onChange={(e) => {
            setSelectedNumber(e.target.value);
          }}
        />
      </form>
      <button className={style.startBtn} onClick={handleClick}>
        Start game
      </button>
    </div>
  );
};
export default Start;
