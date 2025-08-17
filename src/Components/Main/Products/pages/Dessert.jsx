
import { useFoods } from "../FoodContext"


const Dessert = () => {
  const foods = useFoods();

  const desserts = foods.filter(food => 
    food.category && food.category.toLowerCase() === "dessert"
  )

  return (
    <div>
      {desserts.map(food => (
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

export default Dessert