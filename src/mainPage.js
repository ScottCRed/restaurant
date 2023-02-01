import './style.css'

export function mainPage () {
    const container = document.querySelector('#container');
    const backing = document.createElement('div');
    backing.classList.add('page');
    backing.textContent = "push me bih";
    container.appendChild(backing);
   
}