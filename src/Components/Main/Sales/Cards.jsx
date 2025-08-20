import { useFoods } from "../Products/FoodContext"
import { FaShoppingBasket } from "react-icons/fa"

const Cards = () => {
    const foods = useFoods()

    const sales = foods.filter(food =>
        food.sale && food.sale.toLowerCase() === "true"
    )

    return (
        <div className="flex flex-wrap items-center justify-center gap-1">
            {sales.map(food => {
                // تبدیل price و discount به عدد
                const priceNumber = Number(food.price.replace('$', ''))
                const discountNumber = Number(food.discount || 0)
                const discountedPrice = (priceNumber - Math.floor(priceNumber * discountNumber / 100)).toFixed(2) + '$'

                return (
                    <div key={food.id} className="flex items-center justify-center p-5 overflow-hidden bg-red rounded-3xl">
                        <div key={food.id} className="flex flex-col items-start p-4 mb-6 rounded-lg">
                            <h2 className="mb-1 text-3xl font-bold text-yellow max-sm:text-2xl">{food.name}</h2>
                            <p className="mb-2 text-sm text-white">{food.contains}</p>
                            <div className="flex items-center gap-2 mb-2">
                                {discountNumber > 0 ? (
                                    <>
                                        <span className="line-through text-gray-light">{food.price}</span>
                                        <span className="font-bold text-yellow">{discountedPrice}</span>
                                    </>
                                ) : (
                                    <span className="font-bold">{food.price}</span>
                                )}
                            </div>
                            <a href="#">
                                <button className="flex items-center justify-center gap-3 px-6 py-2 mt-10 bg-white rounded-full max-sm:px-3 max-sm:gap-1" type="submit">
                                    <FaShoppingBasket />
                                    <span className="font-semibold">Order now</span>
                                </button>
                            </a>
                        </div>
                        <div className="relative">
                            <img src={food.image} alt={food.name} className="object-cover w-auto h-auto mb-3 rounded-xl" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards