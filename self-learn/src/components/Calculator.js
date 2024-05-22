import '../styles/calculator.css';
import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <Input className="input" variant='filled' type="text" value={result} />
      <div className="keypad">
        <Button onClick={clear} id="clear">C</Button>
        <Button name="1" onClick={handleClick}>1</Button>
        <Button name="2" onClick={handleClick}>2</Button>
        <Button name="3" onClick={handleClick}>3</Button>
        <Button name="4" onClick={handleClick}>4</Button>
        <Button name="5" onClick={handleClick}>5</Button>
        <Button name="6" onClick={handleClick}>6</Button>
        <Button name="7" onClick={handleClick}>7</Button>
        <Button name="8" onClick={handleClick}>8</Button>
        <Button name="9" onClick={handleClick}>9</Button>
        <Button name="0" onClick={handleClick}>0</Button>
        <Button name="+" onClick={handleClick}>+</Button>
        <Button name="-" onClick={handleClick}>-</Button>
        <Button name="*" onClick={handleClick}>*</Button>
        <Button name="/" onClick={handleClick}>/</Button>
        {/* Add more Buttons for other operators and numbers */}
        <Button onClick={calculate} id="equals">=</Button>
      </div>
    </div>
  );
};

export default Calculator;