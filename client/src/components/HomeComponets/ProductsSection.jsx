import hoja from "../../assets/hoja.png"
import { useContext} from "react"
import { MyContext } from "../../context/myContext"
import { usevalid } from "../../hooks/useProducts"
import { Card } from "./ProductsCard"
import { MenuPoducts } from "./MenuProducts"

export const ProductsSection=()=>{
    const {products,number}=useContext(MyContext);
    const {toggleDisplay}=usevalid();
    return(
        <>
            <main className="product-menu">

                <div className="container">

                  <div className="product">
                      <h2 className="title">Menu</h2>
                      <img className="hoja" src={hoja} alt=""/>
                  </div>

                  
                  <MenuPoducts/>

                  <div className="pro1 ">
                      <div className="box-container-1">
                          <Card/>
                      </div>
                      
                      {products.length>4 &&(
                        <div id="1" className="load-more load-more-1"  onClick={toggleDisplay}>
                          {number >= products.length ? "Mostrar menos" : "Mostrar mas..."}
                        </div>

                      )}

                  </div>
                </div>

            </main>
        </>
    )
}