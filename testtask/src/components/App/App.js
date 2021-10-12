import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputText = useRef('');
  const [black, setBlack] = useState('')
  const [purple, setPurple] = useState('')
  const [peach, setPeach] = useState('')
  const handleClick = (e) => {
    e.preventDefault();
    const inVal = inputText.current.value
    const regExpText = /[a-z]+/gmi;
    const regExpNum = /\d/gmi;

    if (inVal.match(regExpText) && !inVal.match(regExpNum)) {
      setBlack((prev) => prev + `${inVal} `)
    }
    if (!inVal.match(regExpText) && inVal.match(regExpNum)) {
      setPurple((prev) => prev + `${inVal} `)
    }
    if (inVal.match(regExpText) && inVal.match(regExpNum)) {
      setPeach((prev) => prev + `${inVal} `)
    }
  }
  
  const blackList = black.split(' ').map(el => <p>{el}</p>)
  const purpleList = purple.split(' ').map(el => <p>{el}</p>)
  const peachList = peach.split(' ').map(el => <p>{el}</p>)

  return (
    <div className="App">
      <select name="selectFilter" id="selectFilter">
        <option value="sortTime">Time to added</option>
        <option value="sortAlph">Alphabet</option>
      </select>
      <div>
        <div>
          <form onSubmit={handleClick}>
            <input type="text" ref={inputText} />
          </form>
        </div>
        <div>black: {blackList}</div>
        <div>purple: {purpleList}</div>
        <div>peach: {peachList}</div>
      </div>
    </div>
  );
}

export default App;
