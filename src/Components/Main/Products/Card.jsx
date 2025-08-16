import data from '../foods.json'

const Card = () => {
  return (
    <>
        {data.foods.map(food => (
            <>
                <img src={food.image}/>
                <h2> {food.name} </h2>
                <p> {food.contains} </p>
                <p> {food.rating} </p>
                <p> {food.price} </p>
            </>
        ))}
    </>
  )
}

export default Card