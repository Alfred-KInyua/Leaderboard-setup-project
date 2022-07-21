import addData from '../modules/addData.js';
import './style.css';
import display from '../modules/display.js';

const myform = document.querySelector('.myform');
const refresh = document.querySelector('.refresh');
const nameElement = document.querySelector('#name');
const scoreElement = document.querySelector('#score');
const msg = document.querySelector('.msg');

const checKMyFormDataElements = async (e) => {
  e.preventDefault();
  if (nameElement.value === '' || scoreElement.value === '') {
    msg.innerHTML = '<p> FILL ALL MISSING FILEDS</P> ';
  } else {
    await addData({ user: nameElement.value, score: scoreElement.value });
    nameElement.value = '';
    scoreElement.value = '';
  }
};

const displayFRomAPI = async () => {
  const geturl = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RMvG2crojZ683ILlW2ZX/scores');
  const data = await geturl.json();
  display(data.result);
};

myform.addEventListener('submit', checKMyFormDataElements);
refresh.addEventListener('click', displayFRomAPI);
