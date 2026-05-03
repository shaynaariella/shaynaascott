/*Homepage JS*/
document.getElementById("game-image")?.addEventListener("click", function() {
    window.location.href = "examples.html";
});

/*Quiz JS*/
const quizButton = document.getElementById("submitQuiz");
const resultBox = document.getElementById("resultBox");

if (quizButton) {
    quizButton.addEventListener("click", function() {

        let q1 = document.querySelector('input[name="q1"]:checked');
        let q2 = document.querySelector('input[name="q2"]:checked');
        let q3 = document.querySelector('input[name="q3"]:checked');
        let q4 = document.querySelector('input[name="q4"]:checked');

        if (!q1 || !q2 || !q3 || !q4) {
            resultBox.style.display = "block";
            resultBox.innerHTML = "<p>Please answer all questions.</p>";
            return;
        }

        let emotional = 0;
        let choices = 0;
        let cinematic = 0;
        let exploration = 0;

        function countAnswer(answer) {
            if (answer === "emotional") emotional++;
            if (answer === "choices") choices++;
            if (answer === "cinematic") cinematic++;
            if (answer === "exploration") exploration++;
        }

        countAnswer(q1.value);
        countAnswer(q2.value);
        countAnswer(q3.value);
        countAnswer(q4.value);

        let result = "";
        if (emotional >= choices && emotional >= cinematic && emotional >= exploration) {
            result = "You are an Emotional Story Gamer!";
        } else if (choices >= emotional && choices >= cinematic && choices >= exploration) {
            result = "You are a Choice‑Driven Gamer!";
        } else if (cinematic >= emotional && cinematic >= choices && cinematic >= exploration) {
            result = "You are a Cinematic Gamer!";
        } else {
            result = "You are an Explorer!";
        }

        resultBox.style.display = "block";
        resultBox.innerHTML = "<h2>" + result + "</h2>";
    });
}

/*Contact JS*/
const sendBtn = document.getElementById("sendMessage");
const contactResult = document.getElementById("contactResult");

if (sendBtn) {
    sendBtn.addEventListener("click", function () {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            contactResult.innerHTML = "<p>Please fill out all fields.</p>";
            return;
        }

        contactResult.innerHTML = `
            <h3>Message Sent!</h3>
            <p>Thank you, ${name}. I will get back to you soon.</p>
        `;
    });
}
