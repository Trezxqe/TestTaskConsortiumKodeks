import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputText = useRef('');
  const [black, setBlack] = useState([])
  const [blackAlph, setBlackAlph] = useState([]);
  const [purple, setPurple] = useState([])
  const [purpleAlph, setPurpleAlph] = useState([]);
  const [peach, setPeach] = useState([])
  const [peachAlph, setPeachAlph] = useState([]);
  const [sort, setSort] = useState(true)

  const handleClick = (e) => {
    e.preventDefault();
    let inVal = inputText.current.value;
    inputText.current.value = '';
    const regExpText = /[a-zа-я\D]+/gmi;
    const regExpNum = /\d/gmi;
    if (inVal.match(regExpText) && !inVal.match(regExpNum)) {
      setBlack([...black, inVal])
      setBlackAlph([...black, inVal].sort())
    }
    if (!inVal.match(regExpText) && inVal.match(regExpNum)) {
      setPurple([...purple, inVal])
      setPurpleAlph([...purple, inVal].sort())
    }
    if (inVal.match(regExpText) && inVal.match(regExpNum)) {
      setPeach([...peach, inVal])
      setPeachAlph([...peach, inVal].sort())
    }
  }


  const handleChange = () => {
    setSort(!sort)
    console.log(sort)
  }

  return (
    <div className="App">
        <select name="selectFilter" id="selectFilter" onChange={handleChange}>
          <option value="sortTime">Time to added</option>
          <option value="sortAlph">Alphabet</option>
        </select>
      <div className="blocks">
        <div className="block inBlock">
          <form onSubmit={handleClick}>
            <input type="text" ref={inputText} />
          </form>
        </div>
        <div className="block peach">peach: {sort ? peach.map(el => <p title={el}>{el}</p>) : peachAlph.map(el => <p>{el}</p>)}</div>
        <div className="block purple">purple: {sort ? purple.map(el => <p title={el}>{el}</p>) : purpleAlph.map(el => <p>{el}</p>)}</div>
        <div className="block black">black: {sort ? black.map(el => <p title={el}>{el}</p>) : blackAlph.map(el => <p>{el}</p>)}</div>
      </div>
    </div>
  );
}

export default App;
