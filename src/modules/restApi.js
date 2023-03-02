const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ss3Eyn4cLT7TlGq5hYtl/scores/';

const getData = async () => {
  const getApiData = await fetch(apiUrl);
  const result = await getApiData.json();
  return result;
};

const setData = async (scores) => {
  const setApiData = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scores),
  });
  const result = await setApiData.json();
  return result;
};

export { getData, setData };
