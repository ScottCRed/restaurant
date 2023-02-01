import './style.css'
import Main from '/img/main.jpg'

export function mainPage () {
    
    const container = document.querySelector('#container');
    const backing = document.createElement('div');
    backing.classList.add('page');
    
    const pageHeading = document.createElement('h2');
    pageHeading.textContent = 'Main page!'

    const img = document.createElement('img');
    img.src = Main

    const para = document.createElement('p');
    para.textContent = 'If this was a real paragraph I might actually ahve something to say \n \
    If this was a real paragraph I might actually ahve something to say \n \
    If this was a real paragraph I might actually ahve something to say \n \
    If this was a real paragraph I might actually ahve something to say \n \
    If this was a real paragraph I might actually ahve something to say \n \
    If this was a real paragraph I might actually ahve something to say'

    backing.appendChild(pageHeading);
    backing.appendChild(img);
    backing.appendChild(para);
    
    container.appendChild(backing);
   
    console.log('buttybutyy')
   
}