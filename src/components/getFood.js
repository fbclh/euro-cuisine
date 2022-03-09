import getItemData from './popup.js';
import hideCSS from './hideCSS.js';
import { addLikes, getLikes } from './likeAPI.js';

const displayData = (arr) => {
  const board = document.querySelector('.food-container');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;

    item.classList.add('card-food');
    item.innerHTML = `
        <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>        
        <button type="button" class="btn-recipe">Recipe</button>
        <div>        
        </div>
        <div class="btn-liked">
          Like
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;

    const btnRecipeElement = item.querySelector('.btn-recipe');
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        // eslint-disable-next-line comma-dangle
        (element) => element.item_id === food.idMeal
      );
      // eslint-disable-next-line operator-linebreak
      btnLikedElement.innerHTML =
        likesReturned !== undefined
          ? `<i class="fas fa-heart"></i> (${likesReturned.likes})`
          : '<i class="far fa-heart"></i> (0)';
    };
    getLikes()
      .then(printLike)
      .catch((e) => console.log(e));

    btnRecipeElement.addEventListener('click', () => {
      getItemData(food.idMeal);
      hideCSS();
    });
    btnLikedElement.addEventListener('click', () => {
      addLikes(food.idMeal);
      getLikes()
        .then(printLike)
        .catch((e) => console.log(e));
    });
    board.appendChild(item);
  });
};

const displayCounter = (categorySelected, count) => {
  categorySelected.innerHTML = `${categorySelected.textContent} (${count})`;
};

const getAllData = async (url, categorySelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responseInfo = responseJson.meals;
  displayCounter(categorySelected, responseInfo.length);
  displayData(responseInfo);
};

export { getAllData as default };
