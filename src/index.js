import './index.css';
import { setData } from './modules/restApi.js';

const form = document.querySelector('form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');

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
