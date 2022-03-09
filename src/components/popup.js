import hideCSS from './hideCSS.js';
import { displayComments, getComments } from './displayComments.js';
import newMessageForm from './newComment.js';

const mainCont = document.querySelector('.food-container');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  hideCSS();
  mainCont.removeChild(elem);
};

const createPopup = (details, msgDat) => {
  const myPopup = document.createElement('div');
  const popupButton = document.createElement('button');
  const itemdata = document.createElement('div');
  itemdata.classList.add('form-container');
  const messageContainer = document.createElement('div');
  messageContainer.id = 'msgContainer';
  messageContainer.classList.add('form-container');
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  displayComments(msgDat, messageContainer);
  newMessageForm(formContainer, details.idMeal);
  itemdata.innerHTML = `<img src="${details.strMealThumb}" width="250px"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>
  <p class="recipe">${details.strInstructions}</p>`;
  itemdata.id = details.idMeal;
  myPopup.id = 'myPopup';
  popupButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  popupButton.addEventListener('click', () => closePopup(myPopup));
  myPopup.classList.add('popup');
  myPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  myPopup.appendChild(popupButton);
  myPopup.appendChild(itemdata);
  myPopup.appendChild(messageContainer);
  myPopup.appendChild(formContainer);
  mainCont.appendChild(myPopup);
};

const getItemData = async (id) => {
  const foodItemDataURL =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(foodItemDataURL + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals[0];
  const messageData = await getComments(id);
  createPopup(responsInfo, messageData);
};

export { getItemData as default };
