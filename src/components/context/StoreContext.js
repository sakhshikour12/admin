import { createContext, useReducer } from "react";
import reducer, {initialState} from './reducer'

export const StoreContext = createContext();

export const StoreProvider = ({childern}) =>{
    const [state, dispatch] = useReducer (reducer, initialState);

    const addToBasket =(product)=>{
        const updateBasket = state.products;
        updateBasket.push(product);

        updatePrice(updateBasket);
    
        dispatch({
            type: "add",
            payload : updateBasket
        })
    } 

    const removeFromBasket =(product) =>{
         const updateBasket = state.products.filter((item) => item.name !== product.name);

         updatePrice(updateBasket);

         dispatch({
            type: "remove",
            payload : updateBasket
         })
    }

    const updatePrice = (product) =>{
        let total = 0;
        product.forEach(product => {
            total += product.price
        })

        dispatch({
            type :"update price",
            payload : total
        })
    }

    const value = {
        total :state.total,
        product : state.products,
        addToBasket,
        removeFromBasket,
    }

    return <StoreContext.Provider value={value}>
        {childern}
    </StoreContext.Provider>
}

