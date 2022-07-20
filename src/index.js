import myurl from '../modules/url.js';
import addScore from '../modules/add_data.js';
import './style.css';
import displayScores from '../modules/display.js';

const myform = document.querySelector('.myform');
const refresh = document.querySelector('.refresh');
const nameElement = document.querySelector('#name');
const scoreElement = document.querySelector('#score');

const checKMyFormDataElements = async (e) => {
  e.preventDefault();
  if (nameElement.value === '' || scoreElement.value === '') return;
  await addScore({ user: nameElement.value, score: scoreElement.value });
  nameElement.value = '';
  scoreElement.value = '';
};

const displayFRomAPI = async () => {
  const geturl = await fetch(myurl);
  const data = await geturl.json();
  displayScores(data.result);
};

myform.addEventListener('submit', checKMyFormDataElements);
refresh.addEventListener('click', displayFRomAPI);
