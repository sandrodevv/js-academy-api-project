


let phoneNumber = document.querySelector(`.phoneNumber`)
let password = document.querySelector(`.password`)
let email = document.querySelector(`.email`)
let firstName = document.querySelector(`.firstName`)
let lastName = document.querySelector(`.lastName`)
let role = document.querySelector(`.role`)
let registrator = document.querySelector(`.register`)
let form = document.querySelector('#form')
let alrLog = document.querySelector('.alrLog')


form.addEventListener('submit', register)


    function register(ev) {
        ev.preventDefault()
        data = {
            phoneNumber: phoneNumber.value,
                password: password.value,
                email: email.value,
                firstName: firstName.value,
                lastName: lastName.value,
                role: role.value
        }
        fetch('https://rentcar.stepprojects.ge/api/Users/register', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                       
                    },
                    body: JSON.stringify(data)})
                    .then(resp => resp.json())
                    .then(resp => console.log(resp))
                    toLogin()
    }


function toLogin(obj) {
    if (!phoneNumber.value) {
        swal ( "" ,  "Fulfill Fields" ,  "error" )
    } else {
        window.location.href = './login.html'
    }
    
}

alrLog.addEventListener('click', function(){
    window.location.href = './login.html'
})

