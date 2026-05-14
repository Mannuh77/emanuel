// OPEN / CLOSE CHAT
function toggleChat() {
    const chatBox = document.getElementById("chatBox");

    if (chatBox.style.display === "block") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "block";
    }
}


// CHATBOT RESPONSES
function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");

    const userText = input.value.trim();
    if (userText === "") return;

    // USER MESSAGE
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userText;
    chatBody.appendChild(userMessage);

    // BOT MESSAGE
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    const text = userText.toLowerCase();
    let response = "";

    // ✅ 1. GREETINGS (FIX YOUR ISSUE HERE)
    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey") ||
        text.includes("good morning") ||
        text.includes("good evening")
    ) {
        response = "Hello 👋 I'm Emanuel's assistant. Ask me about his skills, projects, certifications, or experience.";
    }

    // ✅ 2. SKILLS
    else if (text.includes("skills")) {
        response = "Emanuel specializes in Networking, Full Stack Development, System Administration, Cybersecurity, and IT Support.";
    }

    // ✅ 3. PROJECTS
    else if (text.includes("projects")) {
        response = "Emanuel has worked on Queue Management Systems, Research Projects, Hospital IT Systems, and Networking Solutions.";
    }

    // ✅ 4. CONTACT
    else if (text.includes("contact")) {
        response = "You can contact Emanuel via email at: peterkimindu2@gmail.com.";
    }

    // ✅ 5. CERTIFICATION
    else if (text.includes("certification") || text.includes("certified")) {
        response = "Emanuel is Cisco Certified and experienced in enterprise networking.";
    }

    // ✅ 6. EXPERIENCE
    else if (text.includes("experience")) {
        response = "Emanuel is an ICT Specialist, Network & Systems Administrator, Full Stack Developer, and Trainer.";
    }

    // ✅ 7. DEFAULT RESPONSE
    else {
        response = "I can help you with Emanuel's skills, projects, experience, certifications, and contact details.";
    }

    // BOT RESPONSE (delayed like real chatbot)
    setTimeout(() => {
        botMessage.innerText = response;
        chatBody.appendChild(botMessage);

        // auto scroll
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 400);

    input.value = "";
}


// ✅ ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userInput");

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});