const list = document.querySelector('.list');

export default (scores) => {
  scores.sort((a, b) => b.score - a.score);
  list.innerHTML = '';
  let data = '';
  scores.forEach((score) => {
    data = `<tr><td class="score">${score.user}:</td>  <td> ${score.score}</td></tr>`;
    list.insertAdjacentHTML('beforeend', data);
  });
};