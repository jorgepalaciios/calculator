// pkgs
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs'
// FILES

// COMPONENTS
import Logo from './components/Logo'
import Button from './components/Button'
import ClearButton from './components/ClearButton'
import Screen from './components/Screen'

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calcResults = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please!, set values in order to do calculations")
    }
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>CALCULATOR</h1>
      </div>
      <Logo />
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler={calcResults}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={()=> setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
