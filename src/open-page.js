import Main from /img/Main.jpg
import './style.css'

function createMainPage(){
const container = document.querySelector('#container');
    const mainPage = document.createElement('div');
    //mainPage.classList.add('page')
    mainPage.textContent = "over here"

    //const mainHead = document.createElement('p');
    //mainHead.textContent = 'Hey this is a place you can eat... but javascript'

    //mainPage.appendChild(mainHead);
    container.appendChild(mainHead);

    console.log('over here')

};

export default createMainPage

  