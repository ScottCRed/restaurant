//import createMainPage from "./open-page";

const container = document.querySelector('#container')
const btn = document.createElement('button');
btn.classList.add('press')
btn.textContent = 'press'
container.appendChild(btn)

const addClick = document.querySelector('.press')
addClick.addEventListener('click', createMainPage )

console.log('working again');

