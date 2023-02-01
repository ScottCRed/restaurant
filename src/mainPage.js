export function testFunc () {
    const test = document.querySelector('.test');
    const testButton = document.createElement('button');
    testButton.textContent = "push me bih";
    test.appendChild(testButton);
    testButton.addEventListener('click', () => console.log('i dooont beleive it'));
}