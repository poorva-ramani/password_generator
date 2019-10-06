var specialArr = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
var numericArr = '0123456789';
var alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charSet = '';
var result = '';
var charlength = '';
var sliderValue = document.getElementById("myRange");
var special = document.getElementById("defaultChecked1");
var numeric = document.getElementById("defaultChecked2");
var lowercase = document.getElementById("defaultChecked3");
var uppercase = document.getElementById("defaultChecked4");

function idGenerator() {
    charlength = sliderValue.value;
    console.log(charlength);
    result = '';
    if (special.checked) {
        charSet += specialArr;
    } if (numeric.checked) {
        charSet += numericArr;
    } if (lowercase.checked) {
        charSet += alphabetArr.toLowerCase();
    } if (uppercase.checked) {
        charSet += alphabetArr;
    }
    if (charSet === '') {
        alert("Please select atleast one character type to generate password!!!!!");
    } else {
        for (i = 0; i < charlength; i++) {
            result = result + charSet.charAt(Math.floor(Math.random() * charSet.length));
        } charSet = '';
        document.getElementById('password').value = result;
    }
}
    function rangeSlider() {
        document.getElementById("sliderValue").textContent = sliderValue.value;
    }

    function copyToClipboard() {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }