window.onload = function onPageLoad() {

    let calculator = document.getElementsByClassName('calculator')[0];
    calculator.addEventListener('click', function (event) {
        let text = event.target.innerText;
        let charCode = text.charCodeAt(0);
        console.log("charCode", charCode);
        switch (charCode) {
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 48:
                handleNumericInput(text);
                break;
            case 215:
                window.commandElement = 'multiply';
                window.isBreakText = true;

                break;
            case 43:
                window.commandElement = 'plus';
                window.isBreakText = true;

                break;
            case 8722:
                window.commandElement = 'minus';
                window.isBreakText = true;

                break;
            case 247:
                window.commandElement = 'divide';
                window.isBreakText = true;

                break;
            case 61:
                executeEqualOperation();
                break;
            case 67:
                window.commandElement = 'clear';
                document.getElementById('caluculator-result').innerText = '0';
                break;
            case 8592:
                window.commandElement = 'back';
                executeBackOperation();
            default:
                break;
        }
    })
}

function executeEqualOperation() {
    let currentElement = Number(
        document.getElementById('caluculator-result').innerText);
    let previousInput = Number(
        window.firstinput);
    let finalResult = 0;
    switch (window.commandElement) {
        case 'plus':
            finalResult = currentElement + previousInput;
            break;
        case 'minus':
            finalResult = previousInput - currentElement;
            break;
        case 'divide':
            finalResult = previousInput / currentElement;
            break;
        case 'multiply':
            finalResult = previousInput * currentElement;

            break;
        default:
            break;
    }
    document.getElementById('caluculator-result').innerText =   Math.round(finalResult)
    ;
    window.commandElement = 'equal';

}
function executeBackOperation() {
    let currentText = document.getElementById('caluculator-result').innerText;
    if (currentText) {
        let substr = currentText.substring(0, currentText.length - 1);
        if (!substr) {
            substr = '0';
        }
        document.getElementById('caluculator-result').innerText = substr;
    }
}

function handleNumericInput(numericInput) {
    if (window.isBreakText) {
        saveCurrentValueAndClear();
        window.isBreakText = false;
    }
    addInputElementToEnd(numericInput);
}

function addInputElementToEnd(numericInput) {
    var calculaterResult = document.getElementById('caluculator-result').innerText;
    if (calculaterResult === '0') {
        calculaterResult = '';
    }
    calculaterResult = calculaterResult + numericInput;
    document.getElementById('caluculator-result').innerText = calculaterResult.trim();

}
function saveCurrentValueAndClear() {
    window.firstinput = document.getElementById('caluculator-result').innerText;
    document.getElementById('caluculator-result').innerText = '';
}
