const feedbackBtn = document.getElementById("feedbackBtn");
const message = document.getElementById("message");

feedbackBtn.addEventListener("click", () => {
    message.textContent = "Your feedback submitted successfully";
});