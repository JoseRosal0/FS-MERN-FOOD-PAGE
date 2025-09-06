import { useContext } from "react"
import { MyContext } from "../context/myContext"
import { HAMBURGERS,BREAKFAST,TACOS } from "../data/json"

export const usevalid = ()=>{
    const {products,setProducts,number,setNumber}= useContext(MyContext)
    const validProduct =(e)=>{
      setNumber(4)
      let id= e.target.id;
      var objectToRender = id==="Hamburger" ? HAMBURGERS : id === "Tacos" ? TACOS : BREAKFAST;
      setProducts(objectToRender);
    }

    const toggleDisplay=()=>{
      let newNumber;
      if(number<products.length){
        newNumber = number + 4;
        setNumber(newNumber)
      }else{
        newNumber = 4;
        setNumber(newNumber)
      }
    }

    return {validProduct,toggleDisplay}
}