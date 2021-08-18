//getPin:
function getPin() {
        const pin = Math.round(Math.random() * 10000);
        const pinString = pin + '';
        //Validation 4 Digit Pin:
        if (pinString.length == 4) {
                return pin;
        }
        else {
                return getPin();
        }
}

//Generate Pin:
function generatePin() {
        const pin = getPin();
        document.getElementById('display-pin').value = pin;
}

//Calculator Body Typed Number:
document.getElementById('calc-body').addEventListener('click', function (e) {
        const number = e.target.innerText;
        const typedInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
                if (number == 'C') {
                        typedInput.value = '';
                }
        }
        else {
                const previousInput = typedInput.value;
                const newInput = previousInput + number;
                typedInput.value = newInput;
        }
})