const hiddenItems = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((item) => {
    item.classList.toggle('hidden');
  });
};

export { hiddenItems as default };

// function hiddenItems() {
//   const items = document.querySelectorAll('.card-food');
//   items.forEach((item) => {
//     item.classList.toggle('hidden');
//   });
// }

// export default hiddenItems;