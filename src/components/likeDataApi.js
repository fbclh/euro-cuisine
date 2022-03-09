const projectID = 'xkf1WNltgqyGhjhbknyA';
const likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;

const addLikes = async (itemId) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

const getLikes = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};

export { addLikes, getLikes };
