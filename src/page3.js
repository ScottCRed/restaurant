import background from '/img/background.jpg'

export function page3 () {
    const container = document.querySelector('#container');
    const backing = document.createElement('div');
    backing.classList.add('page');
    
    const pageHeading = document.createElement('h2');
    pageHeading.textContent = 'Page 3!'

    const img = document.createElement('img');
    img.src = background

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