import image from '../../../assets/Group15.png'

import { useState } from "react"
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaShoppingBasket } from 'react-icons/fa'
import { LuAlarmClock } from 'react-icons/lu';


const MainHeader = () => {

  const [count, setCount] = useState(0)

  function decrement(){
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <div className='relative flex items-center justify-between max-lg:mt-5 max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-4 '>
    
      <div className="font-semibold w-[350px] flex flex-col gap-[40px]  
                      max-lg:w-[230px] max-lg:mt-[7rem]
                      max-sm:mt-2">
      
        <div className="flex flex-col items-center gap-[12px]">
            <h1 className="text-5xl leading-normal text-red max-lg:text-[32px]">Order your favourite food</h1>
            <p className="font-normal text-gray-high">Hamburger has many flavors, have you tried Cheese Beef Hamburger?</p>
        </div>
    
        <div className="flex flex-col gap-3">
          <div className="">
          
              <div className="flex items-center gap-2">
                  <span className="font-light text-gray-high">Total Order :</span>
                  <span className="">$5.39</span>
              </div>
              
          </div>
          
          <div className="flex items-center gap-[40px]">
              <div className="flex items-center gap-3">
                  <button type="submit" className="">
                      <FaPlus onClick={() => setCount(count + 1)}/>
                  </button>
                  <span className="text-yellow "> {count} </span>
                  <button type="submit" className="">
                      <FaMinus onClick={decrement}/>
                  </button>
              </div>
              
              <a href="#"><button className="flex items-center justify-center gap-3 bg-yellow px-[24px] py-[16px] rounded-[100px] max-lg:rounded-[50px] max-lg:gap-1 max-lg:px-[15px]" 
                                  type="submit">
                  <FaShoppingBasket />
                  <div className='max-lg:text-sm'>
                    Order now
                  </div>
              </button></a>
          </div>
          
        </div>
        
      </div>

      <div className='absolute top-[1rem] flex flex-col items-start justify-center left-[25rem] max-lg:left-[15rem] max-sm:relative max-sm:left-0'>
        <p className='flex items-center justify-center gap-2 text-lg text-gray-high'>
          <LuAlarmClock/> Delivery
        </p>
        <p className='text-sm text-gray-light'>30 mins</p>
      </div>
      
      <div>
        <img  src={image}
              className=' max-lg:w-[365px]' />
      </div>
    </div>
  )
}

export default MainHeader