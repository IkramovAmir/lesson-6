function reverseNumber1() {
    var numbers = prompt("Son kiriting:");
    var numberLength = numbers.length;
    console.log(typeof numbers);

    var reverseNum = Number(0);
    for(i = numberLength - 1; i >= 0; i--){
        reverseNum += Number(numbers[i]);
    }
    console.log(reverseNum);
}

function reverseNumber2() {
    var numbers = prompt("Son kiriting:");
    var numberLength = numbers.length;
    console.log(typeof numbers);

    var reverseNum = "";
    for(i = numberLength - 1; i >= 0; i--){
        reverseNum += numbers[i];
    }
    reverseNum = Number(reverseNum);
    console.log(reverseNum);
}

function isPrime() {
    var number = Number(prompt("add number: "));
    var temp = Number(0);
    for(i = 0; i < number; i++){
        if (number % i == 0){
            temp++;
        }
    }
    if(temp > 2){
        console.log("Bu tub son emas!");
    }else{
        console.log("Bu tub son!");
    }
}

function factorial() {
    var number = Number(prompt("add number: "));
    var temp = Number(1);
    for(i = 2; i <= number; i++){
        temp *= i;
        console.log(temp);
    }
    console.log(temp);
}

function incrementByStep() {
    var number = Number(prompt("add number: "));
    var number2 = Number(prompt("add step: "));
    for(i = 0; i < number2; i++){
        number += 2;
    }
    console.log(number);
}

function sumOddNumbers() {
    var number = Number(prompt("add number: "));
    var number2 = Number(prompt("add second number: "));
    var result = Number(0);
    for(i = number; i <= number2; i++){
        if(i % 2 != 0){
            result += i;
        }
    }
    console.log(result);
}

function lcm() {
    var number = Number(prompt("add number: "));
    var number2 = Number(prompt("add second number: "));
    var result = 0;
    if (isNaN(number) || isNaN(number2) || number <= 0 || number2 <= 0) {
        console.log("Invalid input.");
    } else {
        for (var i = Math.max(number, number2); ; i++) {
            if (i % number === 0 && i % number2 === 0) {
                result = i;
                console.log(result);
                break;
            }
        }
    }
}

function isPerfectNumber() {
    var number = Number(prompt("add number: "));
    var temp = Number(0);
    for (var i = 1; i <= number / 2 | 0; i++){
        if (number % i == 0) {
            temp += i;
        }
    }
    if (temp == number) {
        console.log("Mukammal son!");
    }else {
        console.log("Mukammal emas!");
    }
}

function findPrimesInRange() {
    var number = Number(prompt("add number: "));
    var number2 = Number(prompt("add second number: "));
    var temp = "";
    for (var i = number; i <= number2; i++) {
        var done = Number(0);
        for (var d = 1; d <= i; d++) {
            if (i % d == 0){
                done += 1;
            }
        }
        if (done == 2) {
            temp += i;
            temp += ',';
        }
    }
    console.log(temp);
}

function isAscending() {
    var number = prompt("add number: ");
    var f = true;
    for (var i = 0; i <= number.length - 1; i++) {
        if (number[i] > number[i+1]) {
            f = false;
            console.log(f);
        }
    }
    if (f){
        console.log(f);
    }
}


function changeColor() {
    var div = document.getElementById("colorBox");
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
}

function countVowels() {
    var text = document.getElementById("textInput").value.toLowerCase();
    var vowels = "aeiou";
    var count = 0;

    for (var i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    document.getElementById("result").innerText = "Unli harflar soni: " + count;
}

function addToList() {
    var input = document.getElementById("listInput");
    var text = input.value.trim();

    if (text !== "") {
        var li = document.createElement("li");
        li.innerText = text;
        document.getElementById("itemList").appendChild(li);
        input.value = "";
    } else {
        alert("Iltimos, matn kiriting!");
    }
}

var correctAnswer = 0;

function generateProblem() {
    var num1 = Math.floor(Math.random() * 50) + 1; // 1 dan 50 gacha son
    var num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 + num2;

    document.getElementById("problem").innerText = num1 + " + " + num2 + " = ?";
    document.getElementById("result").innerText = "";
    document.getElementById("userAnswer").value = "";
}

function checkAnswer() {
    var userAnswer = Number(document.getElementById("userAnswer").value);
    
    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "✅ To‘g‘ri!";
    } else {
        document.getElementById("result").innerText = "❌ Noto‘g‘ri. To‘g‘ri javob: " + correctAnswer;
    }
}

