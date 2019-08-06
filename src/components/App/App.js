import React, { useState } from 'react'
import './App.css'
import Logo from '../Logo'
import Content from '../Content/Content'

const App = () => {
  return (
    <div className='app'>
      <header className='app_header'>
        <Logo className='app_logo' />
        <div className='app_buttons'>
          <button className='app_btn'> Добавить товар </button>
          <button className='app_btn'> Добавить категорию </button>
        </div>
      </header>
      <Content />
    </div>
  )
}

export default App
