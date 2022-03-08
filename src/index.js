import './style.css';
import getAllData from './components/getDataFood.js';

// eslint-disable-next-line operator-linebreak
const [liBeefElement, liPastaElement, liSeafoodElement] =
  document.querySelectorAll('li');
let typeFoodSelected = liBeefElement;

// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=French';
const allPastaURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;
const allSeafoodURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

liBeefElement.addEventListener('click', () => {
  typeFoodSelected = liBeefElement;
  liBeefElement.classList.add('selected');
  liPastaElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'French';
  liPastaElement.textContent = 'Portuguese';
  liSeafoodElement.textContent = 'Italian';
  getAllData(allBeefURL, typeFoodSelected);
});

liPastaElement.addEventListener('click', () => {
  typeFoodSelected = liPastaElement;
  liPastaElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Portuguese';
  liBeefElement.textContent = 'French';
  liSeafoodElement.textContent = 'Italian';
  getAllData(allPastaURL, typeFoodSelected);
});

liSeafoodElement.addEventListener('click', () => {
  typeFoodSelected = liSeafoodElement;
  liSeafoodElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liPastaElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Italian';
  liBeefElement.textContent = 'French';
  liPastaElement.textContent = 'Portuguese';
  getAllData(allSeafoodURL, typeFoodSelected);
});

getAllData(allBeefURL, typeFoodSelected);

