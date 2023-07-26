const submitButton = document.querySelector(".submit-btn")
const inputs = document.querySelectorAll(".input")
const requiredFileArea = document.getElementsByClassName("required-field")

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        handleInputChange(input, index);
    });
});

submitButton.addEventListener("click", () => {
    validateFormAndSubmit();
});

function handleInputChange(input, index) {
    if (input.value !== "") {
        input.classList.add("input-filled");
        requiredFileArea[index].classList.remove("error");
    } else {
        input.classList.remove("input-filled");

    }
}

function validateFormAndSubmit() {
    inputs.forEach((input, index) => {
        if (input.value === "") {
            event.preventDefault();
            input.classList.add("unfilled-input");
            requiredFileArea[index].classList.add("error");
        } else {
            input.classList.remove("unfilled-input");
            requiredFileArea[index].classList.remove("error");
        }
    });
}