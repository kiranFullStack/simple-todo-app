import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [remainingTasks, setRemainingTasks] = useState(0)

  // 👉🏼👉🏼👉🏼 1. Handle text input

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value)
  }

  // 👉🏼👉🏼👉🏼 2. Add to todos array only if input is there, and clear input feild after add

  const handleAddTodo = () => {
    if (todoInput) {
      setTodos([
        ...todos,
        { id: Date.now(), text: todoInput, completed: false },
      ])
    }
    setTodoInput('')
  }

  // 👉🏼👉🏼👉🏼 3. DELETE todos / Search todos array
  //  🎉🎉🎉 Additional functionality to complete the full expected features of todo app

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))

    // Opposite of delete = search ie =
    // setTodos(todos.filter((todo) => todo.id === id))
  }

  // 👉🏼👉🏼👉🏼 4. Add task on ENTER key pressed, to speed up User Experience for Power users

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

  //  👉🏼👉🏼👉🏼 Simpler explanation using if else
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

  // Used to check the remaining tasks
  useEffect(() => {
    const remainingTasksTemp = todos.filter((todo) => todo.completed === false)
    setRemainingTasks(remainingTasksTemp.length)
  }, [todos])

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

      <h5>
        {remainingTasks} remaining out of {todos.length} tasks
      </h5>

      <hr />

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
