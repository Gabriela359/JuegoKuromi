document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const scoreText = document.querySelector(".score-text");
    const messageText = document.querySelector(".message-text");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            scoreText.textContent = `Puntaje: ${checkedCount}`;

            if (checkedCount === 4) {
                scoreText.style.display = "none";
                messageText.style.display = "block";
                messageText.textContent = "MUY BIEN, TE AMO";
            } else {
                scoreText.style.display = "block";
                messageText.style.display = "none";
            }
        });
    });
});
