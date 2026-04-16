let chatOpen = false;

// Open Chat Window
function openChat() {
  if (chatOpen) return;
  chatOpen = true;

  const chatbot = document.createElement("div");
  chatbot.id = "chatbot";
  chatbot.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    max-height: 500px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: Arial, sans-serif;
    z-index: 1000;
  `;

  chatbot.innerHTML = `
    <div id="chatbot-header" style="padding:10px; background:#007bff; color:#fff; font-weight:bold; display:flex; justify-content:space-between; align-items:center; border-top-left-radius:10px; border-top-right-radius:10px;">
      Assistant
      <span style="cursor:pointer" onclick="closeChat()">✖</span>
    </div>

    <div id="chatbot-messages" style="padding:10px; flex:1; overflow-y:auto;"></div>

    <div id="chatbot-input" style="display:flex; border-top:1px solid #ccc; padding:10px;">
      <input type="text" id="chat-input" placeholder="Ask me something..." style="flex:1; padding:8px; border-radius:5px; border:1px solid #ccc;" />
      <button onclick="sendMessage()" style="margin-left:5px; padding:8px 12px; border:none; background:#007bff; color:#fff; border-radius:5px; cursor:pointer;">Send</button>
    </div>
  `;

  document.body.appendChild(chatbot);

  const messages = document.getElementById("chatbot-messages");
  messages.innerHTML += `<div class="bot" style="margin-bottom:8px;">
    Hi 👋 I'm Emanuel’s assistant. You can ask me about services, projects, or how to contact Emanuel.
  </div>`;
}

// Close Chat Window
function closeChat() {
  const chatbot = document.getElementById("chatbot");
  if (chatbot) chatbot.remove();
  chatOpen = false;
}

// Send User Message
async function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById("chatbot-messages");
  messages.innerHTML += `<div class="user" style="text-align:right; margin-bottom:8px;"><b>You:</b> ${text}</div>`;
  input.value = "";

  const typingMsg = document.createElement("div");
  typingMsg.className = "bot";
  typingMsg.style = "margin-bottom:8px;";
  typingMsg.textContent = "Typing...";
  messages.appendChild(typingMsg);
  messages.scrollTop = messages.scrollHeight;

  // First try site-specific or greeting reply
  const localReply = siteSpecificReply(text.toLowerCase());
  if (localReply) {
    typingMsg.textContent = localReply;
    messages.scrollTop = messages.scrollHeight;
    return;
  }

  // General fallback via Hugging Face
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
      method: "POST",
      headers: {
        "Authorization": "Bearer hf_...buBa", // replace with your token
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: text })
    });

    const data = await response.json();

    let reply = "Sorry, I couldn't generate a response.";
    // Correctly handle Hugging Face response
    if (!data.error) {
      // For flan-t5-large, the response is usually an array of text objects or plain string
      if (Array.isArray(data) && data.length && data[0]?.generated_text) {
        reply = data[0].generated_text;
      } else if (typeof data?.generated_text === "string") {
        reply = data.generated_text;
      } else if (typeof data === "string") {
        reply = data;
      }
    }

    typingMsg.textContent = reply;
    messages.scrollTop = messages.scrollHeight;

  } catch (err) {
    typingMsg.textContent = "Oops! Something went wrong.";
    messages.scrollTop = messages.scrollHeight;
    console.error("Error fetching Hugging Face response:", err);
  }
}

// Site-specific or greeting replies
function siteSpecificReply(text) {
  if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
    return "Hi there! 👋 You can ask me about services, projects, or how to contact Emanuel.";
  }

  if (text.includes("service") || text.includes("support") || text.includes("network") || text.includes("system") || text.includes("administration") || text.includes("development")) {
    return "I provide ICT support, networking, system administration, and software development.";
  }

  if (text.includes("project") || text.includes("app") || text.includes("system") || text.includes("software") || text.includes("application")) {
    return "I have developed projects like the CDF Mkononi App, Bursary Application System, and hospital digital systems.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("reach") || text.includes("connect")) {
    return "You can reach Emanuel via email: peterkimindu2@gmail.com or on LinkedIn.";
  }

  return null; // No match → fallback to Hugging Face
}
