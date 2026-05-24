// OPEN / CLOSE CHAT
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    const isVisible = chatBox.style.display === "block";
    chatBox.style.display = isVisible ? "none" : "block";
    
    if (!isVisible) {
        const chatBody = document.getElementById("chatBody");
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Enhanced intelligent response system
function getIntent(text) {
    // WHO questions
    if (/(^|\s)(who|what kind of person|tell me about him|his background)(\s|$)/i.test(text) && 
        /(emanuel|kimindu|he|him|his)/i.test(text)) {
        return "who";
    }
    
    // Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|hola|greetings|sup|yo)/i.test(text)) {
        return "greeting";
    }
    
    // Skills
    if (/(skills|competencies|technologies|tech stack|expertise|good at|proficient in|knows|can do)/i.test(text)) {
        return "skills";
    }
    
    // Experience / Work
    if (/(experience|work|job|career|employed|worked|where did he work|previous job|current job)/i.test(text)) {
        return "experience";
    }
    
    // Projects
    if (/(projects|built|developed|created|portfolio|github|made|applications|systems|platforms)/i.test(text)) {
        return "projects";
    }
    
    // Certifications
    if (/(certification|certified|certificate|courses|training|credentials|qualified|accredited)/i.test(text)) {
        return "certifications";
    }
    
    // Education
    if (/(education|degree|university|college|school|studied|qualified|academic|learned|where did he study)/i.test(text)) {
        return "education";
    }
    
    // Contact
    if (/(contact|email|phone|reach|call|whatsapp|linkedin|connect|get in touch|how to reach|how to contact)/i.test(text)) {
        return "contact";
    }
    
    // References
    if (/(reference|recommendation|referee|who can vouch|recommend him)/i.test(text)) {
        return "references";
    }
    
    // Current role
    if (/(current|present|now|currently|doing now|working as|what is he doing|recent role)/i.test(text)) {
        return "current";
    }
    
    // Age / personal details
    if (/(age|how old|birthday|born|date of birth)/i.test(text)) {
        return "personal";
    }
    
    // Location
    if (/(where is he|location|based|city|from|live|resides)/i.test(text)) {
        return "location";
    }
    
    // Availability / hiring
    if (/(available|hire|employ|freelance|looking for work|open to work|job opportunity)/i.test(text)) {
        return "availability";
    }
    
    // Help
    if (/(help|what can you do|options|menu|commands|how to use|guide)/i.test(text)) {
        return "help";
    }
    
    return "unknown";
}

// Main response generator
function getResponse(intent, text) {
    const responses = {
        who: "👨‍💻 **Emanuel Kimindu Peter** is a versatile **ICT Specialist, Network Engineer, Full Stack Developer, and Research Lead** based in Nairobi, Kenya.\n\n" +
             "🎓 He holds a BSc in Computer Science from Egerton University (Upper Second Class Honors) and is Cisco-certified in networking.\n\n" +
             "💼 With experience across healthcare, government, youth empowerment, and customer experience sectors, Emanuel specializes in:\n" +
             "• Designing & managing LAN/WAN networks\n" +
             "• Deploying Queue Management Systems & digital solutions\n" +
             "• Developing scalable web applications\n" +
             "• Training & empowering youth in digital skills\n\n" +
             "🌟 He's passionate about using technology to solve real-world problems and improve operational efficiency.\n\n" +
             "Want to know more about his skills or experience? Just ask!",
        
        greeting: "👋 Hello! I'm Emanuel's AI assistant. Feel free to ask me anything about him—his skills, experience, projects, certifications, or how to contact him.\n\n" +
                  "💡 Try asking: 'Who is Emanuel?', 'What skills does he have?', or 'Where has he worked?'",
        
        skills: "💻 **Emanuel's Skills & Competencies:**\n\n" +
                "🔹 **Network Engineering** - LAN/WAN, VPNs, DNS, DHCP, Cisco-certified, device configuration\n" +
                "🔹 **Web Development** - HTML, CSS, JavaScript, Python, PHP, React, Git, REST APIs\n" +
                "🔹 **Server Administration** - Windows Server 2022, Active Directory, Group Policies\n" +
                "🔹 **Database Management** - MySQL, Advanced Excel, Kobo Collect, Data Visualization\n" +
                "🔹 **Microsoft 365 & IT Support** - Office 365, CompTIA A+, Windows/UNIX\n" +
                "🔹 **Graphics Design** - Photoshop, Illustrator, Canva\n" +
                "🔹 **Training & Empowerment** - ICT training, Ajira digital skills programs\n" +
                "🔹 **Soft Skills** - Communication, Problem-solving, Leadership, Adaptability\n\n" +
                "His strongest areas are networking, full-stack development, and system administration.",
        
        experience: "📌 **Emanuel's Work Journey:**\n\n" +
                    "🏢 **ICT Field Service Specialist** - MAREZI.CO / Riana Group (July 2025 - Present)\n" +
                    "   → Customer Experience solutions: QMS, Digital Signage, Feedback Systems\n" +
                    "   → Remote & on-site support, client training across multiple sectors\n\n" +
                    "🏥 **ICT Officer** - Lifecare Hospitals (Nov 2024 - Apr 2025)\n" +
                    "   → Improved network connectivity by 30%\n" +
                    "   → Managed QMS, HMIS, Patient Management Systems, CCTV\n\n" +
                    "📊 **Team Lead (Research)** - NACOSTI Project, Egerton University (June 2025)\n" +
                    "   → Castor Farming Adoption & Household Income study\n" +
                    "   → Designed Kobo Toolbox data collection systems\n\n" +
                    "👨‍🏫 **Assistant Centre Manager** - Ajira Youth Empowerment Centre (Jun-Oct 2024)\n" +
                    "   → Trained 300+ youth in Web Dev, Data Analysis, Graphic Design\n\n" +
                    "💼 **ICT Officer** - NG-CDF Kibwezi West (May-Jul 2023)\n" +
                    "🗳️ **Administrative Clerk** - IEBC Kenya (Aug 2022)\n\n" +
                    "Want details about any specific role?",
        
        projects: "🚀 **Key Projects by Emanuel:**\n\n" +
                  "📱 **CDF Mkononi Desktop App**\n" +
                  "   → Constituency Development Fund services platform\n" +
                  "   → Bursary, job & tender applications with real-time tracking\n" +
                  "   → Tech: HTML, CSS, JS, PHP, SQL, Bootstrap, REST APIs\n" +
                  "   → GitHub: github.com/Mannuh77/cdfmkononi_site.git\n\n" +
                  "💰 **Kibwezi West Bursary Application System**\n" +
                  "   → Online bursary application & status tracking\n" +
                  "   → Tech: HTML, CSS, JS, PHP, SQL, REST APIs\n" +
                  "   → GitHub: github.com/Mannuh77/BursaryApplicationSystem.git\n\n" +
                  "🏥 **Healthcare & Customer Experience Deployments**\n" +
                  "   → Queue Management Systems for hospitals, banks & automotive centers\n" +
                  "   → Improved service efficiency & customer satisfaction\n\n" +
                  "🌐 **Personal Portfolio:** emanuelkimindu.netlify.app",
        
        certifications: "🎓 **Emanuel's Certifications:**\n\n" +
                        "✅ **Cisco Certified** - Networking Technician, Routing, Device Configuration, Data Science\n" +
                        "✅ **Ajira Digital Program (Kenya)** - Digital Marketing, Cybersecurity, Graphics Design\n" +
                        "✅ **Udemy** - Advanced Data Analysis with Excel\n" +
                        "✅ **USAID** - Business Administration\n" +
                        "✅ **Alison Academy** - CompTIA A+ 1000\n" +
                        "✅ **Brighter Monday Kenya** - Soft Skills\n\n" +
                        "He continuously updates his skills through industry-recognized certifications.",
        
        education: "🎓 **Education Background:**\n\n" +
                   "🏫 **Egerton University** (2020 - 2024)\n" +
                   "   → BSc. Computer Science\n" +
                   "   → Second Class Honors (Upper Division)\n\n" +
                   "📚 **Dawamu School** (2019)\n" +
                   "   → Kenya Certificate of Secondary Education (KCSE)",
        
        contact: "📞 **Contact Emanuel:**\n\n" +
                 "📧 Email: peterkimindu2@gmail.com\n" +
                 "📱 Phone: +254 741 999 159\n" +
                 "📍 Location: Nairobi, Kenya\n" +
                 "🔗 LinkedIn: linkedin.com/in/emanuel-kimindu\n" +
                 "🌐 Portfolio: emanuelkimindu.netlify.app\n\n" +
                 "💬 He's responsive and open to professional opportunities!",
        
        references: "📋 **Professional References:**\n\n" +
                    "👩‍💼 **Md. Angeline Ojiambo**\n" +
                    "   → HR Manager, Lifecare Hospitals\n" +
                    "   → 📞 +254 718 876 509\n" +
                    "   → ✉️ angeline.ojiambo@lchafrica.com\n\n" +
                    "👨‍💻 **Collins Amdany**\n" +
                    "   → ICT Officer, Lifecare Hospitals Kenya\n" +
                    "   → 📞 +254 707 149 759\n" +
                    "   → ✉️ collins.a@lchafrica.com\n\n" +
                    "👨‍🏫 **Daniel Muia**\n" +
                    "   → Centre Manager, Ajira Youth Empowerment Centre\n" +
                    "   → Chairperson - Ajira Digital Program, Makueni County\n" +
                    "   → 📞 +254 794 022 520\n" +
                    "   → ✉️ danielngengo@gmail.com",
        
        current: "📍 **Current Role (July 2025 - Present):**\n\n" +
                 "Emanuel is an **ICT Field Service Specialist** at **MAREZI.CO** (Riana Group, Kenya).\n\n" +
                 "**What he's doing now:**\n" +
                 "🔹 Setting up & managing Customer Experience solutions (QMS, Virtual QMS, Digital Signage)\n" +
                 "🔹 Providing remote & on-site technical support to clients\n" +
                 "🔹 Training clients across banking, healthcare & automotive sectors\n" +
                 "🔹 Researching & developing improved CX solutions\n" +
                 "🔹 Maintaining project documentation & ensuring high service quality\n\n" +
                 "He's passionate about improving customer experiences through technology!",
        
        location: "📍 **Location:** Nairobi, Kenya\n\n" +
                  "Emanuel is based in Nairobi but has worked across multiple counties including Makueni and Kibwezi. He's available for remote and on-site opportunities in Kenya.",
        
        personal: "📅 **About Emanuel:**\n\n" +
                  "While his exact age isn't specified in his CV, Emanuel is a young professional who:\n" +
                  "• Graduated with BSc Computer Science in 2024\n" +
                  "• Completed secondary school in 2019\n" +
                  "• Has 2+ years of professional experience\n" +
                  "• Is actively building his career in ICT\n\n" +
                  "Want to know about his professional achievements instead? Ask about his certifications or projects!",
        
        availability: "💼 **Availability:**\n\n" +
                      "Emanuel is currently employed full-time as an ICT Field Service Specialist. However, he's open to:\n" +
                      "• Networking opportunities\n" +
                      "• Freelance projects\n" +
                      "• Collaborative initiatives\n" +
                      "• Research partnerships\n\n" +
                      "For specific inquiries, reach out via email: peterkimindu2@gmail.com",
        
        help: "🤖 **I can help you learn about Emanuel!**\n\n" +
              "**Try asking me:**\n" +
              "• 'Who is Emanuel?'\n" +
              "• 'What skills does he have?'\n" +
              "• 'Where has he worked?'\n" +
              "• 'What projects has he built?'\n" +
              "• 'What certifications does he have?'\n" +
              "• 'How can I contact him?'\n" +
              "• 'Where did he study?'\n" +
              "• 'Is he available for work?'\n" +
              "• 'Where is he based?'\n\n" +
              "Just type your question naturally!",
        
        unknown: "🤔 I'm not sure about that. I'm Emanuel's assistant and can tell you about:\n\n" +
                 "✅ Who he is\n" +
                 "✅ His skills & expertise\n" +
                 "✅ Work experience\n" +
                 "✅ Projects he's built\n" +
                 "✅ Certifications & education\n" +
                 "✅ Contact & location\n" +
                 "✅ Availability\n\n" +
                 "💡 Try asking: 'Who is Emanuel?' or 'What skills does he have?'"
    };
    
    return responses[intent] || responses.unknown;
}

// Main sendMessage function
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    
    const userText = input.value.trim();
    if (userText === "") return;

    // Disable input while processing
    input.disabled = true;

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userText;
    chatBody.appendChild(userMessage);

    // Add typing indicator
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "bot-message";
    typingIndicator.innerText = "🤔 Thinking...";
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Process response with slight delay for realism
    setTimeout(() => {
        const intent = getIntent(userText);
        const response = getResponse(intent, userText);
        
        // Replace typing indicator with actual response
        typingIndicator.innerText = response;
        chatBody.scrollTop = chatBody.scrollHeight;
        input.disabled = false;
        input.focus();
    }, 500);

    input.value = "";
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userInput");
    
    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter" && !input.disabled) {
                e.preventDefault();
                sendMessage();
            }
        });
        input.focus();
    }
});