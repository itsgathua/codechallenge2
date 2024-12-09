// Select important elements
let itemSpace = document.getElementById('itemSpace');
let addItemButton = document.getElementById('addItemButton');
let clearListButton = document.getElementById('clearListButton');
let shoppingList = document.getElementById('shoppingList');

// Add item to the list
addItemButton.addEventListener('click', function () {
  let itemName = itemSpace.value.trim(); // Get the input value
  if (itemName === '') {
    alert('Please enter an item.');
    return;
  }

  // Create a new list item
  let listItem = document.createElement('li');

  // Create a span to hold the item name
  let itemText = document.createElement('span');
  itemText.textContent = itemName;

  // Create a Purchase button
  let purchaseButton = document.createElement('button');
  purchaseButton.textContent = 'Purchase';
  purchaseButton.addEventListener('click', function () {
    // Toggle purchased class on the item and update button text
    if (listItem.classList.toggle('purchased')) {
      purchaseButton.textContent = 'Unmark';
    } else {
      purchaseButton.textContent = 'Purchase';
    }
  });

  // Create an Edit button
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
  listItem.appendChild(purchaseButton);
  listItem.appendChild(editButton);

  // Add the list item to the shopping list
  shoppingList.appendChild(listItem);

  // Clear the input field
  itemSpace.value = '';
});

// Clear the entire list
clearListButton.addEventListener('click', function () {
  shoppingList.innerHTML = ''; // Remove all list items
});
