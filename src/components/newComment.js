import { displayComments, getComments } from './displayComments.js';

const postNewMessage = async (id, name, text) => {
  const postMessageLink =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xkf1WNltgqyGhjhbknyA/comments';
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
  const container = document.getElementById('msgContainer');
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
  const newCommentDiv = document.createElement('div');
  newCommentDiv.innerHTML = '<h3 class="align-text">Add a Comment</h3>';
  newCommentDiv.classList.add('message-content');
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
  button.addEventListener('click', () =>
    newMessage(itemId, userName, textMessage)
  );
  newCommentDiv.appendChild(userName);
  newCommentDiv.appendChild(textMessage);
  newCommentDiv.appendChild(button);

  container.appendChild(newCommentDiv);
};

export { newMessageForm as default };
