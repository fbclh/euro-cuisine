import './style.css';
import getAllData from './components/foodApi.js';

const frenchElement = document.querySelectorAll('li');
let typeFoodSelected = liBeefElement;

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=French';

getAllData(URL, typeFoodSelected);



