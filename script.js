let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}
function appendParanthesis() {
    // Determine whether to append '(' or ')'
    const openParentheses = (expression.match(/\(/g) || []).length;
    const closeParentheses = (expression.match(/\)/g) || []).length;
  
    if (openParentheses > closeParentheses) {
      // More open parentheses, so add closing parenthesis
      expression += ')';
    } else {
      // Add opening parenthesis
      expression += '(';
    }
    document.getElementById('result').value = expression;
  }
  
function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
    try {
      const result = eval(expression);
      document.getElementById('result').value = result;
      expression = '';
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }