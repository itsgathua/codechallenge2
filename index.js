// Select important elements
const itemInput = document.getElementById('itemSpace');
const addItemBtn = document.getElementById('addItemButton');
const clearListBtn = document.getElementById('clearListButton');
const shoppingList = document.getElementById('shoppingList');

// Add item to the list
addItemButton.addEventListener('click', function () {
  let itemName = itemInput.value.trim(); // Get the input value
  if (itemName === '') {
    alert('Please enter an item.');
    return;
  }

  // Create a new list item
  let listItem = document.createElement('li');

  // Create a span to hold the item name
  let itemText = document.createElement('span');
  itemText.textContent = itemName;

  // Mark item as purchased when clicked
  itemText.addEventListener('click', function () {
    itemText.classList.toggle('purchased');
  });

  // Create an edit button
  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
    let newName = prompt('Edit item:', itemText.textContent);
    if (newName) {
      itemText.textContent = newName;
    }
  });

  // Append everything to the list item
  listItem.appendChild(itemText);
  listItem.appendChild(editButton);

  // Add the list item to the shopping list
  shoppingList.appendChild(listItem);

  // Clear the input field
  itemInput.value = '';
});

// Clear the entire list
clearListButton.addEventListener('click', function () {
  shoppingList.innerHTML = ''; // Remove all list items
});

