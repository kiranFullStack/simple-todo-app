import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  // 👉🏼👉🏼👉🏼 1. handle input

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value)
  }

  // 👉🏼👉🏼👉🏼 2. Add to todos array

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: todoInput }])
    setTodoInput('')
  }

  // 👉🏼👉🏼👉🏼 3. DELETE todos array / Search todos array

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    // Opposite of delete= search
    // setTodos(todos.filter((todo) => todo.id === id))
  }

  // 👉🏼👉🏼👉🏼 4. Add on ENTER pressed

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div>
      <input
        type='text'
        value={todoInput}
        onChange={handleTodoInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
