import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [prevValue, setPrevValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [overwrite, setOverwrite] = useState(false)

  const clearAll = () => {
    setDisplay('0')
    setPrevValue(null)
    setOperator(null)
    setOverwrite(false)
  }

  const deleteLast = () => {
    if (overwrite) {
      setDisplay('0')
      setOverwrite(false)
      return
    }
    if (display.length === 1) {
      setDisplay('0')
      return
    }
    setDisplay(display.slice(0, -1))
  }

  const inputDigit = (digit) => {
    if (overwrite || display === '0') {
      setDisplay(digit)
      setOverwrite(false)
      return
    }
    setDisplay(display + digit)
  }

  const inputDot = () => {
    if (overwrite) {
      setDisplay('0.')
      setOverwrite(false)
      return
    }
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const compute = (a, b, op) => {
    const x = parseFloat(a)
    const y = parseFloat(b)
    if (Number.isNaN(x) || Number.isNaN(y)) return '0'

    switch (op) {
      case '+':
        return (x + y).toString()
      case '-':
        return (x - y).toString()
      case '×':
        return (x * y).toString()
      case '÷':
        return y === 0 ? 'Error' : (x / y).toString()
      default:
        return b
    }
  }

  const chooseOperator = (op) => {
    if (display === 'Error') {
      clearAll()
      return
    }
    if (prevValue === null) {
      setPrevValue(display)
      setOperator(op)
      setOverwrite(true)
      return
    }
    if (overwrite) {
      setOperator(op)
      return
    }
    const result = compute(prevValue, display, operator)
    setDisplay(result)
    setPrevValue(result === 'Error' ? null : result)
    setOperator(op)
    setOverwrite(true)
  }

  const equals = () => {
    if (operator === null || prevValue === null || overwrite) return
    const result = compute(prevValue, display, operator)
    setDisplay(result)
    setPrevValue(null)
    setOperator(null)
    setOverwrite(true)
  }

  return (
    <div className="calc">
      <div className="calc-display">{display}</div>
      <div className="calc-keys">
        <button className="key key-wide" onClick={clearAll}>C</button>
        <button className="key" onClick={deleteLast}>DEL</button>
        <button className="key key-op" onClick={() => chooseOperator('÷')}>÷</button>

        <button className="key" onClick={() => inputDigit('7')}>7</button>
        <button className="key" onClick={() => inputDigit('8')}>8</button>
        <button className="key" onClick={() => inputDigit('9')}>9</button>
        <button className="key key-op" onClick={() => chooseOperator('×')}>×</button>

        <button className="key" onClick={() => inputDigit('4')}>4</button>
        <button className="key" onClick={() => inputDigit('5')}>5</button>
        <button className="key" onClick={() => inputDigit('6')}>6</button>
        <button className="key key-op" onClick={() => chooseOperator('-')}>-</button>

        <button className="key" onClick={() => inputDigit('1')}>1</button>
        <button className="key" onClick={() => inputDigit('2')}>2</button>
        <button className="key" onClick={() => inputDigit('3')}>3</button>
        <button className="key key-op" onClick={() => chooseOperator('+')}>+</button>

        <button className="key key-wide" onClick={() => inputDigit('0')}>0</button>
        <button className="key" onClick={inputDot}>.</button>
        <button className="key key-eq" onClick={equals}>=</button>
      </div>
    </div>
  )
}

export default Calculator
