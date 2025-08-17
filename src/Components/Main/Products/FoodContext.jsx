import { createContext, useContext, useEffect, useState } from "react";

const FoodContext = createContext();

const FoodProvider = ({children}) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function getFoods(){
            try{
                const res = await fetch('/foods.json');
                if(!res.ok) throw new Error("Error in Fetching");
                const data = await res.json();
                setFoods(data.foods);
            } catch (err) {
                console.log(err);
            }
        }
        getFoods();
    },[]);

    return (
        <FoodContext.Provider value={foods}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;
export const useFoods = () => useContext(FoodContext);