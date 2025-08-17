
import { useFoods } from "../FoodContext"


const Drink = () => {

  const foods = useFoods();

  const drinks = foods.filter(food => 
    food.category && food.category.toLowerCase() === "drink"
  )

  return (
    <div>
      {drinks.map(food => (
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

export default Drink