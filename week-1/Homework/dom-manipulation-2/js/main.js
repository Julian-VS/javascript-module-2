function changeTheme(i){
    switch (i) {
    case 1:
        document.querySelector('.jumbotron').style.backgroundColor = '#588fbd'
        document.querySelector('.btn-primary').style.backgroundColor = '#ffa500'
        document.querySelector('.btn-secondary').style.backgroundColor = 'black'
        document.querySelector('.btn-secondary').style.color = 'white'
        break;
    case 2:
        document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e'
        document.querySelector('.btn-primary').style.backgroundColor = '#5751fd'
        document.querySelector('.btn-secondary').style.backgroundColor = '#31b0d5'
        document.querySelector('.btn-secondary').style.color = 'white'
        break;
    case 3:
        document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a'
        document.querySelector('.btn-primary').style.backgroundColor = 'black'
        document.querySelector('.btn-secondary').style.backgroundColor = '8c9c08'
        document.querySelector('.btn-secondary').style.color = 'black'
        break;
    default:
        break;  
    }

}

let Blue = document.querySelector('#blueBtn').addEventListener('click', e => {
    e.preventDefault()
    changeTheme(1)
})

let Orange = document.querySelector('#orangeBtn').addEventListener('click', e => {
    e.preventDefault()
    changeTheme(2)
})

let Green = document.querySelector('#greenBtn').addEventListener('click', e => {
    e.preventDefault()
    changeTheme(3)
})


/* PART 2*/

const checkInputs = (inputs) => {
    inputs.forEach((input) => {
        input.style.backgroundColor = 'red'
    })
}

const checkLengthAndDisplayAlert = (email, name, description, inputs) => {
    if (checkEmail(email)) {
        inputs.forEach((input) => {
            input.value = ""
            input.style.backgroundColor = "fff"
        })
    } else {
        email.style.backgroundColor = 'red'
    }
}

const checkEmail = (email) => {
    return email.value.includes('@')
}

document.querySelector('form').addEventListener('submit', (e) => {
    const email = e.target.elements.exampleInputEmail1
    const name = e.target.elements.exampleTextInput
    const description = e.target.elements.exampleTextarea
    cons inputs = [email, name, description];

    checkInputs(inputs);
    checkLengthAndDisplayAlert(email, name, description, inputs)
})