document.addEventListener("DOMContentLoaded", () => {
    const faq = document.querySelectorAll(".faq");

    faq.forEach(item => {
        const toggle = item.querySelector(".toggle");
        const answers = item.querySelector(".answers")

        toggle.addEventListener("click", () => {
            const isVisible = answers.style.display === "block";

            // Toggle the answer visibility
            answers.style.display = isVisible ? "none" : "block";

            // Update the toggle symbol
            toggle.innerHTML = isVisible ? `<img src="Images/icon-plus.svg" alt="plus icon">` : `<img src="Images/icon-minus.svg" alt="">`
        })
    })
})
