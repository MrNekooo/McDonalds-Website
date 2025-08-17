import { useFoods } from "../FoodContext"

const FriedChicken = () => {
  const foods = useFoods();

  const friedChickens = foods.filter(food => 
    food.category && food.category.toLowerCase() === "friedchicken"
  )

  return (
    <div>
      {friedChickens.map(food => (
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

export default FriedChicken