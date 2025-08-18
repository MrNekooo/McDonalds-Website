import { useState } from "react";
import { useFoods } from "../FoodContext"
import { FaShoppingBasket } from 'react-icons/fa'

const FriedChicken = () => {
  const foods = useFoods();

  const [addToBasket, setAddToBasket] = useState(``);

  function addedToBasket(name){
    setAddToBasket(`${name} Added to Your Shapping Basket`)
  }

  const friedChickens = foods.filter(food => 
    food.category && food.category.toLowerCase() === "friedchicken"
  )

  return (
    <>
      <div className="mt-5 mb-5 font-semibold text-center text-red">
        {addToBasket}
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-3 mt-5 place-items-center max-2xl:grid-cols-2 max-[800px]:grid-cols-1">
        {friedChickens.map(food => (
          <div  key={food.id}
                className="">
            <div className="w-[370px] max-h-[370px]">
              <img  src={food.image}
                    className="object-cover w-full h-full bg-center bg-no-repeat" />
            </div>
            <h2 className="mt-3 text-xl font-semibold"> {food.name} </h2>
            <p className="font-normal"> {food.contains} </p>
            <div className="flex items-center justify-between mt-5">
              <p className="text-xl font-semibold"> {food.price} </p>
              <button className="p-2 rounded-lg bg-red"
                      onClick={() => addedToBasket(food.name)} > 
                <FaShoppingBasket className="text-white"/> 
              </button>
            </div>
          </div>
         ))}
      </div>
    </>
  )
}

export default FriedChicken