import Food from '/img/food.jpg'

export function page2 () {
    const container = document.querySelector('#container');
    const backing = document.createElement('div');
    backing.classList.add('page');
    
    const pageHeading = document.createElement('h2');
    pageHeading.textContent = 'Page 2!'

    const img = document.createElement('img');
    img.src = Food

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
}