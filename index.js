// Create variables that will store DOM elements
const decimal = document.getElementById("decimal")
const clear = document.getElementById("clear")
const displayValElement = document.getElementById("display_numbers")
const btnNumbers = document.getElementsByClassName("button-number")
const btnOperators = document.getElementsByClassName("button-operator")


// Create variables that will store input
var displayVal = "0";
var pendingVal;
var evalStringArray = [];


// Add event listeners to all buttons
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal);
}
for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}



//  Create a function that will store the contents of a clicked button and display it.
function updateDisplayVal (e) {
    var btnText = e.target.innerText;
    if(displayVal === "0") { 
      displayVal = ""; 
    }

// Append the content of the button to displayVal variable and display it
    displayVal += btnText; 
    displayValElement.innerText = displayVal;
} 


// Create a function that will perform the mathematical operation 

function performOperation (e) {
    var operator = e.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(''));
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

// Create a function that will clear everything
clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}


// Create a function that will insert decimal points
decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}











