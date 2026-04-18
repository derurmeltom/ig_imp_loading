let progress = 0;
let bar = document.getElementById("progress");
let statusText = document.getElementById("status");

const messages = [
    "AUTHENTIFIZIERUNG…",
    "ZUGRIFF AUF IMPERIALES NETZWERK…",
    "SICHERHEITSPROTOKOLLE AKTIV…",
    "HOLO-NET SYNCHRONISIEREN…",
    "IMPERIALE KONTROLLE HERGESTELLT."
];

setInterval(() => {
    if (progress < 100) {
        progress += Math.random() * 3.5;
        bar.style.width = progress + "%";
        statusText.innerText = messages[Math.floor(Math.random() * messages.length)];
    }
}, 600);