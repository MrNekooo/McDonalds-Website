// It's all Icons that we probably will use
// import {  } from 'react-icons/fa'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import FoodProvider from './Components/Main/Products/FoodContext'

const App = () => {
  return (
    <>
      <div className='px-[10rem] py-2 max-xl:px-[1rem] relative font-poppins'>
        <Header/>
        <Main/>
      </div>
    </>
  )
}

export default App