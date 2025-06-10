import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'


function App() {
  return (
    <div className='font-text'>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        {/* <Footer/> */}
      </footer>
    </div>
  )
}

export default App
