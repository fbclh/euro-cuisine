import './style.css';
import getAllData from './components/getDataFood.js';

// eslint-disable-next-line operator-linebreak
const [frenchElement, portugueseElement, italianElement] =
  document.querySelectorAll('li');
let categorySelected = frenchElement;

// links to get data from food api
const frenchURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=French';
const portugueseURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?a=Portuguese`;
const italianURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`;

frenchElement.addEventListener('click', () => {
  categorySelected = frenchElement;
  frenchElement.classList.add('selected');
  portugueseElement.classList.remove('selected');
  italianElement.classList.remove('selected');
  categorySelected.textContent = 'French';
  portugueseElement.textContent = 'Portuguese';
  italianElement.textContent = 'Italian';
  getAllData(frenchURL, categorySelected);
});

portugueseElement.addEventListener('click', () => {
  categorySelected = portugueseElement;
  portugueseElement.classList.add('selected');
  frenchElement.classList.remove('selected');
  italianElement.classList.remove('selected');
  categorySelected.textContent = 'Portuguese';
  frenchElement.textContent = 'French';
  italianElement.textContent = 'Italian';
  getAllData(portugueseURL, categorySelected);
});

italianElement.addEventListener('click', () => {
  categorySelected = italianElement;
  italianElement.classList.add('selected');
  frenchElement.classList.remove('selected');
  portugueseElement.classList.remove('selected');

  categorySelected.textContent = 'Italian';
  frenchElement.textContent = 'French';
  portugueseElement.textContent = 'Portuguese';
  getAllData(italianURL, categorySelected);
});

getAllData(frenchURL, categorySelected);
