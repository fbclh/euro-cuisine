import './style.css';
import getAllData from './components/foodAPI.js';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=French';

getAllData(URL);

// getAllData(URL, 'French');
