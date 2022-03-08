const countComment = (arr, title) => {
  const counter = ` (${arr.length})`;
  title.innerHTML += counter;
};

const displayComments = (arr, container) => {
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.innerHTML = 'Comments';
  container.appendChild(title);
  const messageData = document.createElement('div');
  messageData.classList.add('mesgContent');
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
    messageData.innerHTML = '<span>Any Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};

// function to get all messages
const getComments = async (id) => {
    const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments?item_id=';
    const request = new Request(getMessagesLink + id);
    const response = await fetch(request);
    const responseJson = await response.json();
    return responseJson;
};

// function to post element
const postNewMessage = async (id, name, text) => {
  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  };

  await fetch(request, data);
  const arr = await getComments(id);
  const container = document.getElementById('mesgContainer');
  displayComments(arr, container);
};

const newMessage = (id, user, message) => {
  if (user.value !== '' && message.value !== '') {
    postNewMessage(id, user.value, message.value);
    user.value = '';
    message.value = '';
  }
};

const newMessageForm = (container, itemId) => {
  const formNewMessage = document.createElement('div');
  formNewMessage.innerHTML = '<h3 class="aligCener">Add a Comment</h3>';
  formNewMessage.classList.add('mesgContent');
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.name = 'username';
  userName.placeholder = 'Your name';
  const textMessage = document.createElement('textarea');
  textMessage.name = 'comment';
  textMessage.rows = '4';
  textMessage.cols = '30';
  textMessage.placeholder = 'Your comment';
  const button = document.createElement('input');
  button.type = 'button';
  button.value = 'Comment';
  button.addEventListener('click', () => newMessage(itemId, userName, textMessage));
  formNewMessage.appendChild(userName);
  formNewMessage.appendChild(textMessage);
  formNewMessage.appendChild(button);

  container.appendChild(formNewMessage);
};

export { newMessageForm, displayComments, getComments, countComment };