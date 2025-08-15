// main.js
fetch("https://beu-result-backend.onrender.com/init")
    .then(res => res.json())
    .then(data => {
        document.getElementById("token").value = data.token;
        document.getElementById("timestamp").value = data.timestamp;
        document.getElementById("hash").value = data.hash;
        document.getElementById("captchaQ").innerText = data.captcha_q;
    });
