import logo from '../../../assets/image3.png'
import burgerMenu from '../../../assets/Burger.png'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Links from './Links';

const Navbar = () => {

  const [burgerBtn, setBurgerBtn] = useState(false)

  function handleBurgerBtn(){
    setBurgerBtn(!burgerBtn)
  }

  return (
    <div className='relative'>
      <div className="flex items-center justify-between">
        <div className='flex items-center justify-center gap-[80px]'>
          <img  src={logo}
              alt='Logo Page'
              className='p-3 rounded-sm bg-red' />
              
          <Links styles="flex items-center justify-center gap-[48px] font-semibold text-gray-light max-lg:hidden"/>
        </div>

        <div className='flex items-center justify-center gap-[12px] font-normal'>
          <button className='border border-red text-red px-[16px] py-[8px] rounded-[100px] hover:text-white hover:bg-red hover:border-none transition-all delay-75 ease-in'>
            Sign in
          </button>
          <button className='text-white bg-red px-[16px] py-[8px] rounded-[100px] hover:border hover:border-red hover:text-red hover:bg-white transition-all delay-75 ease-in'>
            Log in
          </button>
        </div>
        
        <div className='hidden max-lg:flex'>
          <button onClick={handleBurgerBtn}>
            { burgerBtn ? <IoMdClose className='text-4xl rounded-lg text-gray-high'/> : <img src={burgerMenu} alt='Menu'/> }
          </button>
        </div>
      </div>
      <div className='relative z-40 h-full'>
        <Links  styles={`hidden max-lg:flex absolute ${burgerBtn ? "left-[-1rem]" : "left-[-10rem]"} top-[0rem]  bottom-0 bg-white h-screen flex items-center flex-col gap-10 py-[5rem] px-6 transition-all delay-75 ease-in text-gray-light font-semibold z-41`}
                className="" />
      </div>

    </div>
  )
}

export default Navbar