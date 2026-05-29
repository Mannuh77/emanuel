document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_akkzf94", "template_f8yhj2u", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
    });
});
