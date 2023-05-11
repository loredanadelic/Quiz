import style from './Result.module.css'

const Result = ({ result, position, selectedNumber }) => {
  return (
    <div className={style.result}>
      <h2>Pitanje: </h2>
      <p>{position + 1}/{selectedNumber}</p>
      <h2>Rezultat</h2>
      <p>{result}</p>
    </div>
  );
};

export default Result;
