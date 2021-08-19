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
        document.getElementById('submit-btn').removeAttribute('disabled', true);
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

//Verify Pin:
function verifyPin() {
        const generatePin = document.getElementById('display-pin').value;
        const typedPin = document.getElementById('typed-numbers').value;
        //Verified Pin
        const success = document.getElementById('notify-success');
        const fail = document.getElementById('notify-fail');

        if (generatePin == typedPin) {
                success.style.display = 'block';
                alert('✅ Pin Matched... Secret door is opening for you');
                fail.style.display = 'none';
                location.reload();
        }
        else {
                fail.style.display = 'block';
                alert("❌ Pin Didn't Match, Please try again");
                success.style.display = 'none';
                location.reload();
        }
}
