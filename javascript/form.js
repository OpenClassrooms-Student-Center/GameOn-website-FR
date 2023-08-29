let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let prenom = document.getElementById('first')
    let nom = document.getElementById('last')
    let email = document.getElementById('email')
    let birthdate = document.getElementById('birthdate')
    let quantity = document.getElementById('quantity')
    let btnRadio = document.querySelectorAll('input[type=radio]')
    for (let i = 0; i < btnRadio.length; i++) {
        if (btnRadio[i].checked) {
        console.log(btnRadio[i].value)
    }}
})