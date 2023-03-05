import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  // 👉🏼👉🏼👉🏼 1. handle input

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value)
  }

  // 👉🏼👉🏼👉🏼 2. Add to todos array

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }])
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

  // 👉🏼👉🏼👉🏼 5. Toggle completed todo

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    )
  }

  // Simpler explanation using if else
  // const handleToggleComplete = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         }
  //       }
  //       return todo
  //     })
  //   )
  // }

  return (
    <div className='container'>
      <div className='input-container'>
        <input
          type='text'
          value={todoInput}
          onChange={handleTodoInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {todos.map((todo) => (
        <div
          className='set-straignt'
          key={todo.id}>
          <li className={todo.completed ? 'completed' : ''}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {todo.text}
          </li>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <div>
        <p>&copy; 2023 Kiran</p>
        <a
          href='https://github.com/kiranFullStack/music-store-app-with-search'
          target='_blank'
          rel='noreferrer'>
          ⭐️⭐️⭐️CODE👨🏽‍💻⭐️⭐️⭐️
        </a>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default App
