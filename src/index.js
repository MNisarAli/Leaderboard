import './index.css';
import { getData, setData } from './modules/restApi.js';

const form = document.querySelector('form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const scoresList = document.querySelector('#scores-list');
const refreshBtn = document.querySelector('#refresh-btn');
const notification = document.querySelector('#notification');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const score = {
    user: userName.value,
    score: userScore.value,
  };
  userName.value = '';
  userScore.value = '';
  await setData(score);
  // Show the notification after the data is submitted
  notification.classList.add('show');
  // Hide the notification after a short delay
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
});

// Get List of Scores on Page Load
const getScores = async () => {
  scoresList.innerHTML = '';
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  // Add spinner to container
  scoresList.appendChild(spinner);
  const scores = await getData();
  // Sort Scores in Descending Order
  scores.result.sort((a, b) => b.score - a.score);
  let count = 0;
  scores.result.forEach((item) => {
    count += 1;
    const li = document.createElement('li');
    li.classList.add('score');
    // Add icons to the scores
    if (count === 1) {
      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class="fas fa-trophy gold"></i>`;
    } else if (count === 2) {
      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class="fas fa-trophy silver"></i>`;
    } else if (count === 3) {
      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class="fas fa-trophy bronze"></i>`;
    } else {
      li.innerHTML = `${count}. ${item.user}: ${item.score} <i class="fas fa-medal"></i>`;
    }
    scoresList.appendChild(li);
  });
  // Remove spinner from container
  scoresList.removeChild(spinner);
};
getScores();

// Updated List of Scores by Pressing Refresh Btn
refreshBtn.addEventListener('click', async () => {
  await getScores();
});
