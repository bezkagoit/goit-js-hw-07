const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.getElementsByClassName('item');
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

Array.from(categoryItems).forEach(category => {
  const categoryName = category.querySelector(`h2`);
  const categoryItemList = category.querySelectorAll(`ul li`);
  const categoryTitle = categoryName ? categoryName.textContent : `No Title`;
  const numberOfElements = categoryItemList.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elemets: ${numberOfElements}`);
});
