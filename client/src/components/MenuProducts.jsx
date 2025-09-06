import { useContext } from "react"
import { MyContext } from "../context/myContext"
import { usevalid } from "../hooks/useProducts"
import { HAMBURGERS ,TACOS ,BREAKFAST} from "../data/json"

export const MenuPoducts = ()=>{
  const {products}=useContext(MyContext)
  const {validProduct}=usevalid()
  return(
    <div className="menu-nav">
      <button id="Hamburger" onClick={(e)=>validProduct(e)} className={`tab ${products===HAMBURGERS ? "active" : ""}`}>Hambuerguesa</button>
      <button id="Tacos" onClick={(e)=>validProduct(e)} className={`tab ${products===TACOS ? "active" : ""}`}>Tacos</button>
      <button id="Breakfast" onClick={(e)=>validProduct(e)} className={`tab ${products===BREAKFAST ? "active" : ""}`}>Desayunos</button>
    </div>
  )
}