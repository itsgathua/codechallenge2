// References to DOM elements
const itemInput = document.getElementById('itemSpace');
const addItemBtn = document.getElementById('addItemButton');
const clearListBtn = document.getElementById('clearListButton');
const shoppingList = document.getElementById('shoppingList');

// Load list from localStorage or initialize an empty array
let shoppingItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

// Render the list on page load
renderList();

// Add a new item
addItemBtn.addEventListener('click', () => {
  const item = itemInput.value.trim();
  if (item) {
    shoppingItems.push({ name: item, purchased: false });
    itemInput.value = '';
    saveAndRender();
  }
});

// Clear the list
clearListBtn.addEventListener('click', () => {
  shoppingItems = [];
  saveAndRender();
});

// Save to localStorage and re-render the list
function saveAndRender() {
  localStorage.setItem('shoppingItems', JSON.stringify(shoppingItems));
  renderList();
}

// Render the shopping list
function renderList() {
  shoppingList.innerHTML = '';
  shoppingItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.toggle('purchased', item.purchased);

    listItem.innerHTML = `
      <span>${item.name}</span>
      <button class="edit">Edit</button>
    `;

    // Toggle purchased on click
    listItem.querySelector('span').addEventListener('click', () => {
      shoppingItems[index].purchased = !shoppingItems[index].purchased;
      saveAndRender();
    });

    // Edit item
    listItem.querySelector('.edit').addEventListener('click', () => {
      const newName = prompt('Edit item:', item.name);
      if (newName) {
        shoppingItems[index].name = newName.trim();
        saveAndRender();
      }
    });

    shoppingList.appendChild(listItem);
  });
}
