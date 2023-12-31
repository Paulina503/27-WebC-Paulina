const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
const apiKey = //"b3a71d00b55d4caf87e3879fd8df4e03" //AQUI VA EL API KEY
const apiUrl = `https://crudcrud.com/api/${apiKey}/users`

function loadUsers() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{ //arreglo de objetos literales con la info. de los usuarios
        userList.innerHTML = ''
        data.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = `
                <strong> ${user.name} </strong> (${user.email})
                <button data-id="${user._id} class="btn btn-edit">Editar</button>
                <button data-id="${user._id} class="btn btn-delete">Eliminar</button>
            `
            userList.appendChild(li)
        });
    })
}

//alta de usuarios
crudForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const newUser = {
        name: nameInput.value,
        email: emailInput.value
    }
    
    
    fetch(apiURL,{
        method:'POST',
        body:JSON.stringify(//Convierto mi información en formato JSON para enviarlo al servidor
         newUser
        ),
        headers:{
            'Content-Type' :'application/json'
        }
    }).then(() => {
        nameInput.value = ''
        emailInput.value = ''
        loadUsers()
    })
})

document.addEventListener("DOMContentLoaded", function(){
    loadUsers
})