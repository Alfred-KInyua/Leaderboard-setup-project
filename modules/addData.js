import myurl from './url.js';

export default async (score) => {
  await fetch(myurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};