const hideCSS = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hidden');
  });
};

export { hideCSS as default };