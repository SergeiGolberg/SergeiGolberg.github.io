// функция добавляющая актуальный возраст на страницу
function calculateAge() {
    const today = new Date();
    const birthday = new Date(1989, 1, 15);

    const age = today.getFullYear() - birthday.getFullYear();
    document.getElementById('age').innerHTML = `Age: ${age};`
};

calculateAge();

// смена стиля
let whiteMode = false;

function changeStyle () {
    if (!whiteMode) {
        document.body.style.backgroundImage = 'url(images/whiteback.jpg)';
        document.getElementById('contacts').style.backgroundColor = 'black';
        document.getElementById('contacts').style.borderRadius = '15px';
        document.getElementById('btn-style').style.backgroundColor = 'black';
        document.getElementById('btn-style').style.color = 'white';
        document.getElementById('btn-style').style.boxShadow = '5px 5px 5px darkblue'
        

        const elementsHead = document.querySelectorAll('h1, h2, h3');
        elementsHead.forEach(el => {
            el.style.color = 'black';
        });

        const elementsP = document.querySelectorAll('p, ul, ol, li');
        elementsP.forEach(el => {
            el.style.color = 'black';
            el.style.fontWeight = 'bold';
        });

        const elementsLink = document.querySelectorAll('a');
        elementsLink.forEach(el => {
            el.style.color = 'darkblue';
            el.style.fontWeight = 'bold';
        });

        whiteMode = true;       
    } else {
        document.body.style.backgroundImage = '';
        document.getElementById('contacts').style.backgroundColor = '';
        document.getElementById('contacts').style.borderRadius = '';
        document.getElementById('btn-style').style.backgroundColor = '';
        document.getElementById('btn-style').style.color = '';
        document.getElementById('btn-style').style.boxShadow = '';

        const resetStylesElements = document.querySelectorAll('h1, h2, h3, p, a, ul, ol, li');
        resetStylesElements.forEach(el => {
            el.style.color = '';
            el.style.fontWeight = '';
        });

        whiteMode = false;
    }
}

document.getElementById('btn-style').addEventListener('click', changeStyle);