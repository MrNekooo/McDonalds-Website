import { Link } from 'react-router-dom'
import { SiMcdonalds } from "react-icons/si";
import { FaHamburger } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { useState } from 'react';

const Products = () => {

const [selectedItem, setSelectedItem] = useState(null)

function linkClasses (item){
    return selectedItem === item ? "bg-yellow" : "bg-white"
}


return (
    <div className='text-gray-high text-[16px] flex items-center gap-5 max-[800px]:overflow-x-auto max-[800]px:whitespace-nowrap hide-scrollbar'>
        <Link   to={"/"}
                className={`flex items-center gap-2 w-fit px-5 py-2 rounded-[100px] ${linkClasses("best")}`}
                onClick={() => setSelectedItem("best")} > 
            <SiMcdonalds className='text-sm'/> Best seller
            
        </Link>
        <Link   to={"/hamburger"}
                className={`flex items-center gap-2 w-fit px-5 py-2 rounded-[100px] ${linkClasses("hamburger")}`}
                onClick={() => setSelectedItem("hamburger")} >
            <FaHamburger className='text-sm'/> Hamburger
                    
        </Link>
        <Link   to={"/drink"}
                className={`flex items-center gap-2 w-fit px-5 py-2 rounded-[100px] ${linkClasses("drink")}`}
                onClick={() => setSelectedItem("drink")} >
            <RiDrinks2Fill className='text-sm'/> Drink
                    
        </Link>
        <Link   to={"/dessert"}
                className={`flex items-center gap-2 w-fit px-5 py-2 rounded-[100px] ${linkClasses("dessert")}`}
                onClick={() => setSelectedItem("dessert")} >
            <LuDessert className='text-sm'/> Dessert
                    
        </Link>
        <Link   to={"/friedChicken"}
                className={`flex items-center gap-2 w-fit px-5 py-2 rounded-[100px] ${linkClasses("chicken")}`}
                onClick={() => setSelectedItem("chicken")} >
            <GiChickenLeg className='text-sm'/> Fried Chicken
                    
        </Link>
    </div>
  )
}

export default Products