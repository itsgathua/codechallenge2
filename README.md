# Shopping List Webpage

A simple interactive shopping list application where users can:

- Add items to the list.
- Mark items as purchased.
- Edit or update existing items.
- Clear the entire list.
- Save the list for future use (data persists even after refreshing the page).


## Features
### Add Items**:
   - Enter a shopping item in the input field and click the "Add" button.
   - The item will appear in the list.

### Mark Items as Purchased**:
   - Click on an item in the list to mark it as purchased (text will have a strikethrough and a green background).

### Edit Items**:
   - Click the "Edit" button next to an item to change its name.
### Clear the List**:
   - Click the "Clear List" button to remove all items from the list.

### Persistent Storage**:
   - Items are saved in the browser's local storage, so they remain after refreshing or reopening the page.



## How to Run

1. Clone or download the project files.
2. Open the `index.html` file in your web browser.
3. Start managing your shopping list!

## Technical Overview

1. ## HTML:
   - Provides the structure with an input field, buttons, and a list container.

2. ## JavaScript:
   - Handles core functionalities such as:
     - Adding, editing, and deleting items.
     - Marking items as purchased.
     - Persisting data using `localStorage`.


## How it Works

### Local Storage**:
  - Saves the list in the browser so it doesn't reset on refresh.
  - Uses `JSON.stringify` to store and `JSON.parse` to retrieve the data.

### Event Listeners**:
  - For buttons and list items to handle user actions (add, mark, edit, and clear).



##