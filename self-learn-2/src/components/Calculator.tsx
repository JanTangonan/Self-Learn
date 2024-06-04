import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import '../styles/calculator.css';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? number : displayValue + number);
    }
  };

  const handleOperatorClick = (selectedOperator: string) => {
    if (operator && !waitingForSecondOperand) {
      calculate();
    }
    setFirstOperand(displayValue);
    setOperator(selectedOperator);
    setWaitingForSecondOperand(true);
  };

  const calculate = () => {
    const operand1 = parseFloat(firstOperand);
    const operand2 = parseFloat(displayValue);

    if (isNaN(operand1) || isNaN(operand2)) {
      return;
    }

    let result = 0;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstOperand('');
    setOperator('');
    setWaitingForSecondOperand(false);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand('');
    setOperator('');
    setWaitingForSecondOperand(false);
  };

  return (
    <>
    <div className='break'></div>
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <Button onClick={() => handleNumberClick('7')}>7</Button>
        <Button onClick={() => handleNumberClick('8')}>8</Button>
        <Button onClick={() => handleNumberClick('9')}>9</Button>
        <Button onClick={() => handleOperatorClick('/')}>/</Button>
        <Button onClick={() => handleNumberClick('4')}>4</Button>
        <Button onClick={() => handleNumberClick('5')}>5</Button>
        <Button onClick={() => handleNumberClick('6')}>6</Button>
        <Button onClick={() => handleOperatorClick('*')}>*</Button>
        <Button onClick={() => handleNumberClick('1')}>1</Button>
        <Button onClick={() => handleNumberClick('2')}>2</Button>
        <Button onClick={() => handleNumberClick('3')}>3</Button>
        <Button onClick={() => handleOperatorClick('-')}>-</Button>
        <Button onClick={() => handleNumberClick('0')}>0</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={calculate}>=</Button>
        <Button onClick={() => handleOperatorClick('+')}>+</Button>
      </div>
    </div>
    </>
    
  );
};

export default Calculator;