import myurl from '../modules/url';
import addScore from '../modules/add_data';
import './style.css';
import displayScores from '../modules/display';

const myform = document.querySelector('.myform');
const refresh = document.querySelector('.refresh');
const { name_Element, score_Element } = myform.elements;

const formAddHandler = async (e) => {
  e.preventDefault();
  if (name_Element.value===''|| score_Element.value ==='') return 0;
  await addScore({ user: name_Element.value, score: score_Element.value });
  name_Element.value = '';
  score_Element.value = '';
};

const renderFromAPI = async () => {
  const fetchPro = await fetch(myurl);
  const data = await fetchPro.json();
  displayScores(data.result);
};

myform.addEventListener('submit', formAddHandler);
refresh.addEventListener('click',renderFromAPI);


