import { Link } from 'react-router-dom'
import { SiMcdonalds } from "react-icons/si";
import { FaHamburger } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { useState } from 'react';

const Products = () => {

const [selectedItem, setSelectedItem] = useState(null)

return (
    <div className='text-gray-high text-[16px] flex items-center gap-5'>
        <Link   to={"/"}
                className='flex items-center gap-2 bg-white w-fit px-5 py-2 rounded-[100px]' > 
            <SiMcdonalds className='text-sm'/> Best seller
            
        </Link>
        <Link   to={"/hamburger"}
                className='flex items-center gap-2 bg-white w-fit px-5 py-2 rounded-[100px]' >
            <FaHamburger className='text-sm'/> Hamburger
                    
        </Link>
        <Link   to={"/drink"}
                className='flex items-center gap-2 bg-white w-fit px-5 py-2 rounded-[100px]' >
            <RiDrinks2Fill className='text-sm'/> Drink
                    
        </Link>
        <Link   to={"/dessert"}
                className='flex items-center gap-2 bg-white w-fit px-5 py-2 rounded-[100px]' >
            <LuDessert className='text-sm'/> Dessert
                    
        </Link>
        <Link   to={"/friedChicken"}
                className='flex items-center gap-2 bg-white w-fit px-5 py-2 rounded-[100px]' >
            <GiChickenLeg className='text-sm'/> Fried Chicken
                    
        </Link>
    </div>
  )
}

export default Products