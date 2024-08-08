//https://www.theodinproject.com/lessons/foundations-calculator#project-solution

//1.
const add = ((num1, num2) => num1 + num2);
const subtract = ((num1, num2) => num1 - num2);
const multiply = ((num1, num2) => num1 * num2);
const divide = ((num1, num2) => num2 === 0 ? "Error!" : num1/num2);

//2.
let firstNumber = 0;
let secondNumber = 0;
let operator;

//3.
function operate(num1, num2, operation) {
    if (operation.toString() === '+') {
        firstNumber = num1;
        secondNumber = num2;
        operator = operation.toString();
        add(num1, num2);
        //console.log(add(num1, num2));
    } else if (operation.toString() === '-') {
        firstNumber = num1;
        secondNumber = num2;
        operator = operation.toString();
        subtract(num1, num2);
        //console.log(subtract(num1, num2));
    } else if (operation.toString() === '*') {
        firstNumber = num1;
        secondNumber = num2;
        operator = operation.toString();
        multiply(num1, num2);
        //console.log(multiply(num1, num2));
    } else if (operation.toString() === '/') {
        firstNumber = num1;
        secondNumber = num2;
        operator = operation.toString();
        divide(num1, num2);
        //console.log(divide(num1, num2));
    }
}

/*
operate(2, 5, '+');
operate(2, 2, '-');
operate(9, 0, '*');
operate(20, 0, '/');
*/

//5.
function populate() {
    let numBtn = document.querySelectorAll('.num-button');

    // console.log(numBtn)

    numBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(btn.innerText);
        });
    })
}

populate();