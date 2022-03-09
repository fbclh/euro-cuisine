const countComment = (arr, title) => {
  const counter = ` (${arr.length})`;
  title.innerHTML += counter;
};

const displaycomments = (arr, container) => {
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.innerHTML = 'Comments';
  container.appendChild(title);
  const messageData = document.createElement('div');
  messageData.classList.add('message-content');
  if (!arr.error) {
    countComment(arr, title);
    arr.forEach((element) => {
      const messItem = document.createElement('div');
      messItem.innerHTML = `
      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;
      messageData.appendChild(messItem);
    });
  } else {
    title.innerText += ' (0)';
    messageData.innerHTML = '<span>No Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};

const getComments = async (id) => {
  const getMessagesLink =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments?item_id=';
  const request = new Request(getMessagesLink + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  return responseJson;
};

export { displaycomments, getComments, countComment };