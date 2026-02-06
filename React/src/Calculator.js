// calculatorLogic.js

export const compute = (a, b, op) => {
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

export const inputDigitLogic = (display, digit, overwrite) => {
  if (overwrite || display === '0') {
    return { display: digit, overwrite: false }
  }
  return { display: display + digit, overwrite }
}

export const inputDotLogic = (display, overwrite) => {
  if (overwrite) {
    return { display: '0.', overwrite: false }
  }
  if (!display.includes('.')) {
    return { display: display + '.', overwrite }
  }
  return { display, overwrite }
}

export const deleteLastLogic = (display, overwrite) => {
  if (overwrite) {
    return { display: '0', overwrite: false }
  }
  if (display.length === 1) {
    return { display: '0', overwrite }
  }
  return { display: display.slice(0, -1), overwrite }
}
