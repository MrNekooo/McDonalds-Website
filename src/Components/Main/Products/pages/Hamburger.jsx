
import { useFoods } from "../FoodContext"


const Hamburger = () => {
  const foods = useFoods(); 

  const hamburgers = foods.filter(food => 
    food.category && food.category.toLowerCase() === "hamburger"
  )

  return (
    <div>
      {hamburgers.map(food => (
          <div key={food.id}>
            <img src={food.image}/>
            <h2> {food.name} </h2>
            <p> {food.contains} </p>
            <p> {food.rating} </p>
            <p> {food.price} </p>
          </div>
        ))}
    </div>
  )
}

export default Hamburger