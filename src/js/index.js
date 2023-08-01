const formFields = document.querySelectorAll(".input")
const submitButton = document.querySelector(".submit-btn")

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    formFields.forEach((input) => {
        if (input.value) {
            input.classList.add('filled')
            input.nextElementSibling.classList.remove('error')
        } else {
            input.classList.remove('filled')
            input.classList.add('not-filled')
            input.nextElementSibling.classList.add('error')
        }
    });
})