import { displayCounter } from '../components/getFood.js';
import { countComments } from '../components/displayComments.js';

beforeAll(() => {
  document.body.innerHTML = `  
  <!-- Main -->
    <main class="main-container">
      <!-- Header -->
      <header class="header">
        <div>
          <a href="/" class="logo-link">
          <h1 class="logo">

          </h1>
          </a>
        </div>
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="selected list list-1">French</li>
            <li class="list list-2">Portuguese</li>
            <li class="list list-3">Italian</li>
          </ul>
        </nav>
      </header>
      <!-- Section -->
      <section class="food-container">
        <!-- Card Foods (Dynamic JS) -->
      </section>
      <!-- Footer -->
      <footer class="footer">
        <p>© 2022 Euro Cuisine®</p>
      </footer>
    </main>
  `;
});

describe('Test to verify number of items in French cuisine category.', () => {
  test('The result should be French (28) ', () => {
    const frenchElement = document.querySelector('li');
    displayCounter(frenchElement, 28);
    expect(frenchElement.textContent).toEqual('French (28)');
  });
});

describe('Testing the correct counting of comments', () => {
    test('Result must show Comments (5)', () => {
    const container = document.querySelector('.food-container');
    container.innerHTML = `<h3>Comments</h3>
    <div><span>New comment 1</span></div>
    <div><span>New comment 2</span></div>
    <div><span>New comment 3</span></div>
    <div><span>New comment 4</span></div>
    <div><span>New comment 5</span></div>`;
    const title = document.querySelector('h3');
    const array = document.querySelectorAll('span');

    countComments(array, title);

    expect(title.innerHTML).toEqual('Comments (5)');
  });
});