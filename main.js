const sergeiAge = document.getElementById('SergeiAge');
const programmingAge = document.getElementById('programmingAge')

/* функция для вычисления разницы между сегодняшней датой и заданной дополнительно */
function calculateAge(giveDate) {
    const today = new Date();
    const date1 = new Date(giveDate);

    let age = today.getFullYear() - date1.getFullYear();
    
    if (today.getMonth() < date1.getMonth() || (today.getMonth() === date1.getMonth() && today.getDate() < date1.getDate())) {

        age--;
    }
    
    return age;
};

 /* Функция вычисления возраста */
function displayAgeSergei() {
    const birthDate = new Date('1989-02-15');
    const age =  calculateAge(birthDate);

    sergeiAge.innerText = `${age}`;
};

displayAgeSergei();

/* Функция вычесления количества минут программирования */ 
function displayAgeProgramming() {
    const startDate = new Date('2022-11-01T10:00');
    const today = new Date();

    const ageMilisec = today - startDate;
    const minutes = Math.floor(ageMilisec / (1000 * 60));

    programmingAge.innerText = `${minutes} минут!`;
}
displayAgeProgramming();



/* Функция вызова сообщения о разработке раздела Проекты */ 
function showAlert() {
    alert('Сорри, этот раздел находится в разработке');
}

const alertLink = document.getElementById('alert');
alertLink.addEventListener('click', showAlert);

