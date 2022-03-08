const hiddenItems = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hidden');
  });
};

export { hiddenItems as default };