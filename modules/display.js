const dataReceived = document.querySelector('.list');
export default (scores) => {
  dataReceived.innerHTML = '';
  scores.forEach((receivedData) => {
    const data = `<tr><td class="score">${receivedData.user}:</td>
    <td> ${receivedData.score}</td></tr>`;
    dataReceived.insertAdjacentHTML('beforeend', data);
  });
};