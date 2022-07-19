import './style.css';
/* eslint max-classes-per-file: ["error", 2] */
class Leaders {
  constructor(Name, Score) {
    this.Name = Name;
    this.Score = Score;
  }
}
class ListLeaders {
  static displaLeaders=() => {
    const scores = [
      {
        Name: 'Alfred',
        Score: '100',
      },
      {
        Name: 'Martinas',
        Score: '34',
      },
      {
        Name: 'Lucy',
        Score: '55',
      }];
    const scoreboard = scores;
    scoreboard.forEach((scored) => ListLeaders.addScores(scored));
  }

  static addScores =(scored) => {
    const list = document.querySelector('.list');
    const addRow = document.createElement('tr');
    addRow.innerHTML = `
     <td>${scored.Name}</td>
     <td>${scored.Score}</td>    
    `;
    list.appendChild(addRow);
  }
}
document.addEventListener('DOMContentLoaded', () => ListLeaders.displaLeaders());
document.querySelector('.myform').addEventListener('submit', (e) => {
  e.preventDefault();
  const Name = document.querySelector('#name').value;
  const Score = document.querySelector('#score').value;
  const newScore = new Leaders(Name, Score);
  ListLeaders.addScores(newScore);
});
