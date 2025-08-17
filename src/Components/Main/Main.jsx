import { Route, Routes } from 'react-router-dom'
import Products from './Products/Products'
// import Sales from './Sales/Sales'
// import MobileAppSection from './MobileAppSection/MobileAppSection'

import BestSeller from './Products/pages/BestSeller'
import Hamburger from './Products/pages/Hamburger'
import Drink from './Products/pages/Drink'
import Dessert from './Products/pages/Dessert'
import FriedChicken from './Products/pages/FriedChicken'
import FoodProvider from './Products/FoodContext'


const Main = () => {
  return (
    <>
        <h2 className='text-[48px] font-semibold text-red'>Menu</h2>
        <FoodProvider>
          <div>
            <Products/>
            <div>
              <Routes>
                <Route path='/' element={<BestSeller/>}/>
                <Route path='/hamburger' element={<Hamburger/>}/>
                <Route path='/drink' element={<Drink/>}/>
                <Route path='/dessert' element={<Dessert/>}/>
                <Route path='/friedChicken' element={<FriedChicken/>}/>
              </Routes>
            </div>
          </div>
        </FoodProvider>
        {/* <Sales/> */}
        {/* <MobileAppSection/> */}
    </>
  )
}

export default Main