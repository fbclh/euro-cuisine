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
            <span class="logo-span">Euro</span> <span>Cuisine</span>
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

describe('Check counter all item function', () => {
  test('Should be show Beef (42) ', () => {
    const beefElement = document.querySelector('li');
    displayCounter(beefElement, 42);
    expect(beefElement.textContent).toEqual('Beef (42)');
  });
});

describe('Check comments counter function', () => {
  test('Title header shows Comments (3)', () => {
    const container = document.querySelector('.container-food-cards');
    container.innerHTML = `<h3>Comments</h3>
    <div><span>New comment 1</span></div>
    <div><span>New comment 2</span></div>
    <div><span>New comment 3</span></div>`;
    const title = document.querySelector('h3');
    const array = document.querySelectorAll('span');

    countComments(array, title);

    expect(title.innerHTML).toEqual('Comments (3)');
  });
});