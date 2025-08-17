
import { useFoods } from "../FoodContext"

const BestSeller = () => {
const foods = useFoods(); 


  return (
    <div>
      {foods.map(food => (
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

export default BestSeller