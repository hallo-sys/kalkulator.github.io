switch (operator) {
    case '+':
        resultValue = num1 + num2;
        break;
    case '-':
        resultValue = num1 - num2;
        break;
    case '*':
        resultValue = num1 * num2;
        break;
    case '/':
        resultValue = num1 / num2;
        break;
}

result.value = resultValue;
currentInput = resultValue.toString();