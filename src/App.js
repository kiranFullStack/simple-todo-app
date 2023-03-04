import './App.css'
import { useState } from 'react'
import { Component } from './Component'

function App() {
  const [name, setname] = useState('first')

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{name}</h1>
        <button onClick={() => setname('second')}>Click</button>

        <h1>{`Hello=  ${200 + 800}`}</h1>
        <h1>Hello {name}</h1>
      </header>
    </div>
  )
}

export default App
