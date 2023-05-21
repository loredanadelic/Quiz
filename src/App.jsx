import { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Components/Question";
import Result from "./Components/Result";
import Start from "./Components/Start";
const url = "https://opentdb.com/api.php?";
function App() {
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(0);
  const [position, setPosition] = useState(0);
  const [end, setEnd] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "General Knowledge",
    id: 9,
  });
  const [selectedNumber, setSelectedNumber] = useState(3);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategories(res.data["trivia_categories"]));
  }, []);
  const handleClick = async () => {
    if (selectedNumber < 3 || selectedNumber > 12) {
      return alert("You need to choose number between 3 and 12!");
    }
    await axios
      .get(url + `amount=${selectedNumber}&category=${selectedCategory.id}`)
      .then((res) => {
        setQuestions(res.data.results);
        setResult(0);
        setEnd(false);
        setPosition(0);
      })
      .catch((err) => console.log(err));
  };
  const handleRestart = () => {
    setQuestions([]);
    setSelectedCategory({
      name: "General Knowledge",
      id: 9,
    });
    setSelectedNumber(3);
  };
  if (questions.length < 1) {
    return (
      <Start
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setSelectedNumber={setSelectedNumber}
        handleClick={handleClick}
      />
    );
  }
  return (
    <div className="game">
      <Question
        question={questions[position]}
        setPosition={setPosition}
        setResult={setResult}
        setEnd={setEnd}
        position={position}
        end={end}
        selectedNumber={selectedNumber}
      />
      <Result
        result={result}
        position={position}
        selectedNumber={selectedNumber}
      />
      {end && (
        <div className="restartBtn">
          <button onClick={handleRestart}>Pokreni ponovo</button>
        </div>
      )}
    </div>
  );
}

export default App;
