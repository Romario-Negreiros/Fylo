/* Little script for email validation and error message display */
const input = document.querySelector('.email')
const button = document.querySelector('.button')
const warning = document.querySelector('.emailWarning')

function validationMessage() {
    function valid() {
        warning.style.color = 'green'
        warning.innerText = 'Your email is valid!'
        setTimeout(() => warning.innerText = '', 2500)
    }
    function invalid() {
        warning.style.color = 'hsl(0, 100%, 63%)'
        warning.innerText = 'Please enter a valid email address'
        setTimeout(() => warning.innerText = '', 2500)
    }
    return {
        valid,
        invalid
    }
}

const emailIs = validationMessage()

button.addEventListener('click', () => {
    const value = input.value
    value.match(/[@]{1}[a-z]*[.]{1}/) !== null ? emailIs.valid() : emailIs.invalid()  
})
