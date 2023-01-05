import './index.css';
import { getData, setData } from './modules/restApi.js';

const form = document.querySelector('form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const scoresList = document.querySelector('#scores-list');
const refreshBtn = document.querySelector('#refresh-btn');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const score = {
    user: userName.value,
    score: userScore.value,
  };
  userName.value = '';
  userScore.value = '';
  await setData(score);
});

// Get List of Scores on Page Load
const getScores = async () => {
  scoresList.innerHTML = '';
  const scores = await getData();
  scores.result.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `${item.user}: ${item.score}`;
    scoresList.appendChild(li);
  });
};
getScores();

// Updated List of Scores by Pressing Refresh Btn
refreshBtn.addEventListener('click', async () => {
  getScores();
});
