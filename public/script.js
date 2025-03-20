async function sendMessage() {
    let input = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (input.trim() === "") return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

    let response = await fetch("https://zerox-chat-bot-api.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
    });

    let data = await response.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
}

async function downloadVideo() {
    let url = document.getElementById("video-url").value;
    if (!url) return alert("Please enter a valid URL");

    window.open(`https://nayan-video-downloader.vercel.app/alldown?url=${encodeURIComponent(url)}`, "_blank");
}
