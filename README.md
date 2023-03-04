## React Todo App

This is a simple React Todo App with add, delete and complete functionality.

## ⭐️⭐️⭐️ Link = [https://endearing-cascaron-b352db.netlify.app/](https://endearing-cascaron-b352db.netlify.app/{:target="_blank"})

# Getting Started

Clone the repository:

`git clone https://github.com/<your-username>/react-todo-app.git`

# Navigate to the project directory:

`cd react-todo-app`

# Install the dependencies:

`npm install`

# Start the development server:

`npm start`

Open the app in your browser by visiting http://localhost:3000.

## Functionality

**Add Todo:** Type in a todo and press the "Add" button or the "Enter" key to add it to the list.

**Delete Todo:** Click the "Delete" button to remove a todo from the list.

**Complete Todo:** Click the checkbox next to a todo to mark it as completed. The completed todos will have a line through them.

# Code Explanation

**handleTodoInputChange:** This function handles the input change event and updates the todoInput state accordingly.

**handleAddTodo:** This function adds a new todo to the todos state by spreading the existing todos and adding a new todo object with a unique id, text, and completed set to false.

**handleDeleteTodo:** This function removes a todo from the todos state by filtering out the todo with the given id.

**handleKeyDown:** This function is triggered when the "Enter" key is pressed while typing in a new todo. It calls the handleAddTodo function to add the new todo to the list.

**handleToggleComplete:** This function toggles the completed property of a todo with the given id. It uses the map function to create a new array of todos with the completed todo updated accordingly.
