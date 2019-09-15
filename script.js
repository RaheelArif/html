
var number1 = prompt("enter first number");
var number2 = prompt("enter second number");
var operation = prompt("enter operation");

switch (operation) {
    case "+":
        alert(number1 + number2);
        break;
    case "-":
        alert(number1 - number2);
        break;
    case "/":
        alert(number1 / number2);
        break;
    case "*":
        alert(number1 * number2);
        break;
    default:
        alert("please enter a valid operation")
}