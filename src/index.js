import { testFunc } from "./mainPage";

const test = document.querySelector('#container');
const testDiv = document.createElement('div');
testDiv.classList.add('test');
testDiv.textContent = "This is a test";

test.appendChild(testDiv);

testFunc();

console.log('AAAAAAAAAAAAAH')