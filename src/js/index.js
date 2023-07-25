const submitBtn = document.querySelector(".submit-btn")

const inputs = document.querySelectorAll(".input")

const requiredFileArea = document.getElementsByClassName("required-field")

submitBtn.addEventListener("click", () => {
    event.preventDefault();

    inputs.forEach((input, index) => {
        if (input.value === "") {
            input.classList.add("unfilled-input")
            requiredFileArea[index].classList.add("error")
        } else {
            input.classList.remove("unfilled-input")
            requiredFileArea[index].classList.remove("error")
        }
    });
});

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value !== "") {
            input.classList.add("input-filled")
        } else {
            input.classList.remove("input-filled")
        }
    })
});