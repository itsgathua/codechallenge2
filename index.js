// References to DOM elements
const itemInput = document.getElementById('itemSpace');
const addItemBtn = document.getElementById('addItemButton');
const clearListBtn = document.getElementById('clearListButton');
const shoppingList = document.getElementById('shoppingList');

// Load list from localStorage or initialize an empty array
let shoppingItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

// Create the list on page load
createList();

// Add a new item
addItemBtn.addEventListener('click', () => {
  const item = itemInput.value.trim();
  if (item) {
    shoppingItems.push({ name: item, purchased: false });
    itemInput.value = '';
    saveAndCreate();
  }
});

// Clear the list
clearListBtn.addEventListener('click', () => {
  shoppingItems = [];
  saveAndCreate();
});

// Save to localStorage and re-render the list
function saveAndCreate() {
  localStorage.setItem('shoppingItems', JSON.stringify(shoppingItems));
  createList();
}

// Create the shopping list
function createList() {
  shoppingList.innerHTML = '';
  shoppingItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.toggle('purchased', item.purchased);

    listItem.innerHTML = `
      <span>${item.name}</span>
      <button class="edit">Edit</button>
    `;


    // Edit item
    listItem.querySelector('.edit').addEventListener('click', () => {
      const newName = prompt('Edit item:', item.name);
      if (newName) {
        shoppingItems[index].name = newName.trim();
        saveAndCreate();
      }
    });

    shoppingList.appendChild(listItem);
  });
}
