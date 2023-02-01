import { mainPage } from "./mainPage";
import { page2 } from "./page2";
import { page3 } from "./page3";
import './style.css'

mainPage();

const page1Click = document.querySelector('.mainP');
    page1Click.addEventListener('click', mainPage);

const page2Click = document.querySelector('.offerP');
    page2Click.addEventListener('click', page2);

const page3Click = document.querySelector('.contactP');
    page3Click.addEventListener('click', page3);
