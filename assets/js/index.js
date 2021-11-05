let container = document.getElementById('container')

toggle = () => {
    container.classList.toggle('register')
    container.classList.toggle('login')
}

setTimeout(() => {
    container.classList.add('login')
}, 200)