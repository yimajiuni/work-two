import React from 'react'
import './app.css'
import Sidebar from './components/sidebar/Sidebar'
import Body from './components/body/Body'

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
    )
}

export default App