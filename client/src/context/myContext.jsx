import { children, createContext } from "react";
import { useState } from "react";
import { HAMBURGERS } from "../data/json";

export const MyContext= createContext();

export const MyProvider= ({children})=>{
    const [products,setProducts] = useState(HAMBURGERS);
    const [number,setNumber]= useState(4);
    return(
        <MyContext.Provider value={{
            products,setProducts,
            number,setNumber
        }}>
            {children}
        </MyContext.Provider>
    )
}

