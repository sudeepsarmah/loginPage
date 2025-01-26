const inputSection = document.querySelector(".input")
const inputName = document.querySelector("#userName")
const inputPassword = document.querySelector("#password")
const submitBtn = document.querySelector("#submit")
const resetBtn = document.querySelector("#reset")


const acceptPassword = (e) => {
    e.preventDefault()
    const existingAlert = document.querySelector(".passwordAlert")
    if (existingAlert) {
        existingAlert.remove()
    }
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/
    const testPassword = regex.test(inputPassword.value)
    if (testPassword) {
        const correctPasswordAlert = document.createElement("div")
        correctPasswordAlert.classList.add("correctPasswordAlert")
        correctPasswordAlert.classList.add("passwordAlert")
        const correctPasswordAlertText = document.createElement("p")
        correctPasswordAlertText.textContent = "Your account has been created.❤️"
        correctPasswordAlert.appendChild(correctPasswordAlertText)
        inputSection.appendChild(correctPasswordAlert)
        inputName.value = ""
        inputPassword.value = ""
    } else {
        const wrongPasswordAlert = document.createElement("div")
        wrongPasswordAlert.classList.add("wrongPasswordAlert")
        wrongPasswordAlert.classList.add("passwordAlert")
        const wrongPasswordAlertText = document.createElement("p")
        wrongPasswordAlertText.textContent = "Kindly enter a valid password to continue"
        wrongPasswordAlert.appendChild(wrongPasswordAlertText)
        inputSection.appendChild(wrongPasswordAlert)
    }
}

const resetValues = (e) => {

    inputName.value = ""
    inputPassword.value = ""
    e.preventDefault

}

submitBtn.addEventListener("click", acceptPassword)
resetBtn.addEventListener("click", resetValues)