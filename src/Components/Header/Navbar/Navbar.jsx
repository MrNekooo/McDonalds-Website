import logo from '../../../assets/image3.png'
import burgerMenu from '../../../assets/Burger.png'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {

  const [burgerBtn, setBurgerBtn] = useState(false)

  function handleBurgerBtn(){
    setBurgerBtn(!burgerBtn)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className='flex items-center justify-center gap-[80px]'>
          <img  src={logo}
              alt='Logo Page'
              className='p-3 rounded-sm bg-red' />
          <ul className='flex items-center justify-center gap-[48px] font-semibold text-gray-light max-lg:hidden'>
            <li className='font-black text-red'> HomePage </li>
            <li > Menu </li>
            <li > Sale off </li>
            <li > News </li>
            <li > Contact </li>
          </ul>
        </div>

        <div className='flex items-center justify-center gap-[12px] font-normal'>
          <button className='border border-red text-red px-[16px] py-[8px] rounded-[100px]'>Sign in</button>
          <button className='text-white bg-red px-[16px] py-[8px] rounded-[100px]'>Log in</button>
        </div>
        
        <div className='hidden max-lg:flex'>
          <button onClick={handleBurgerBtn}>
            { burgerBtn ? <IoMdClose className='text-4xl rounded-lg text-gray-high'/> : <img src={burgerMenu} alt='Menu'/> }
          </button>
        </div>
      </div>

    </>
  )
}

export default Navbar