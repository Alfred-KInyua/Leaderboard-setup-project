import API_URL from './url';
export default async (score) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};