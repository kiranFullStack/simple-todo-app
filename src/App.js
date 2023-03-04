import logo from './logo.svg'
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

        {/* <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>Kiran's First App</p>
        <h1>Hello world</h1>
        <h1>Heading</h1>
        <h2 className='heading-style'>Heeading 2</h2>
        <h3 className='heading-3'>Heading 3</h3>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default App
