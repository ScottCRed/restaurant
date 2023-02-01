import { mainPage } from "./mainPage";
import { page2 } from "./page2";
import { page3 } from "./page3";
import './style.css'

function clear() {
    document.getElementById('container').innerHTML = '';
}

mainPage();

const page1Click = document.querySelector('.mainP');
    page1Click.addEventListener('click', clear );
    page1Click.addEventListener('click', mainPage);
    page1Click.addEventListener('mouseover', () => page1Click.style.backgroundColor = 'black');
    page1Click.addEventListener('mouseout', () => page1Click.style.backgroundColor = 'transparent');
    

const page2Click = document.querySelector('.offerP');
    page2Click.addEventListener('click', clear);
    page2Click.addEventListener('click', page2);
    page2Click.addEventListener('mouseover', () => page2Click.style.backgroundColor = 'black');
    page2Click.addEventListener('mouseout', () => page2Click.style.backgroundColor = 'transparent');

const page3Click = document.querySelector('.contactP');
    page3Click.addEventListener('click', clear);
    page3Click.addEventListener('click', page3);
    page3Click.addEventListener('mouseover', () => page3Click.style.backgroundColor = 'black');
    page3Click.addEventListener('mouseout', () => page3Click.style.backgroundColor = 'transparent');
