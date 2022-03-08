import './style.css';
import getAllData from './components/foodApi.js';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

getAllData(URL, 'French');

// getAllData(URL, 'French');
