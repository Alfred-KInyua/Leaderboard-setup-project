const data_received = document.querySelector('.list');
export default (scores) => {
  data_received.innerHTML = '';
  scores.forEach((received_data) => {
    const data = `<tr><td class="score">${received_data.user}:</td><td> ${received_data.score}</td></tr>`;
    data_received.insertAdjacentHTML('beforeend', data);
  });
};