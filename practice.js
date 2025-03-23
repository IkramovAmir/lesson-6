document.querySelector(".colorButton").addEventListener("click", function() {
    var div = document.querySelector(".colorBox");
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
});

document.querySelector(".vowelButton").addEventListener("click", function() {
    var text = document.querySelector(".textInput").value.toLowerCase();
    var vowels = "aeiou";
    var count = 0;

    for (var i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    document.querySelector(".vowelResult").innerText = "Unli harflar soni: " + count;
});

document.querySelector(".addButton").addEventListener("click", function() {
    var input = document.querySelector(".listInput");
    var text = input.value.trim();

    if (text !== "") {
        var li = document.createElement("li");
        li.innerText = text;
        document.querySelector(".itemList").appendChild(li);
        input.value = "";
    } else {
        alert("Iltimos, matn kiriting!");
    }
});

var correctAnswer = 0;
document.querySelector(".problemButton").addEventListener("click", function() {
    var num1 = Math.floor(Math.random() * 50) + 1;
    var num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 + num2;

    document.querySelector(".problemText").innerText = num1 + " + " + num2 + " = ?";
    document.querySelector(".checkResult").innerText = "";
    document.querySelector(".userAnswer").value = "";
});

document.querySelector(".checkButton").addEventListener("click", function() {
    var userAnswer = Number(document.querySelector(".userAnswer").value);

    if (userAnswer === correctAnswer) {
        document.querySelector(".checkResult").innerText = "✅ To‘g‘ri!";
    } else {
        document.querySelector(".checkResult").innerText = "❌ Noto‘g‘ri. To‘g‘ri javob: " + correctAnswer;
    }
});
