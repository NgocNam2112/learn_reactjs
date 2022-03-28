var emailInputValue = document.getElementById('username');
var passwordInputValue = document.getElementById('password');

function login() {
    window.alert(`Clicked to login button \n 
    Email: ${emailInputValue.value} \n 
    Password: ${passwordInputValue.value} `)
}

function calculator() {
    var firstNumber = +document.getElementById('firstnumber').value;
    var secondNumber = +document.getElementById('secondnumber').value
    var result = firstNumber + secondNumber;

    console.log('result', result)
    // document.getElementById('result').value = result;
}

function mouseDownInput() {
    window.alert('mouse down on input')
}

function loadingImage() {
    var img = document.getElementById('image');
    console.log('image is loaded', img.complete)
}

// var btnClickMe = document.getElementById('click-me');
// btnClickMe.addEventListener('click',clickMe)

function clickMe() {
    window.alert('add event listener successfull')
}