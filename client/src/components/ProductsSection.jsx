import hoja from "../assets/hoja.png"
import car from "../assets/car.svg"
import hamburger_1 from "../assets/hamburger-1.png"
import { useState } from "react"

import { HAMBURGERS ,TACOS ,BREAKFAST} from "../data/json"




const Card = ({numberToShow,objectToRender}) => {
  return (
    <>
      {objectToRender.slice(0,numberToShow).map(({ name, description, img, price }, index) => (
        <div key={index} className="box-1">
          <div className="image">
            <img src={img} alt={name} />
          </div>

          <div className="content">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="icons">
              <span className="price">{price}$</span>
              <span className="buy">
                <img src={car} alt="carrito" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};



export const ProductsSection=()=>{
    const [products,setProducts]=useState(HAMBURGERS)
    const [number,setNumber]= useState(4);

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

    const validProduct =(e)=>{
      setNumber(4)
      let id= e.target.id;
      var objectToRender = id==="Hamburger" ? HAMBURGERS : id === "Tacos" ? TACOS : BREAKFAST;
      setProducts(objectToRender);
      console.log("este es el producto: ",id, "y este es el objeto : ", objectToRender);
    }

    return(
        <>
            <main className="product-menu">

                <div className="container">

                  <div className="product">
                      <h2 className="title">Menu</h2>
                      <img className="hoja" src={hoja} alt=""/>
                  </div>

                  <div className="menu-nav">
                      <button id="Hamburger" onClick={validProduct} className={`tab ${products===HAMBURGERS ? "active" : ""}`}>Hambuerguesa</button>
                      <button id="Tacos" onClick={validProduct} className={`tab ${products===TACOS ? "active" : ""}`}>Tacos</button>
                      <button id="Breakfast" onClick={validProduct} className={`tab ${products===BREAKFAST ? "active" : ""}`}>Desayunos</button>
                  </div>

                    <div className="pro1 ">
                        <div className="box-container-1">
                            <Card numberToShow={number} objectToRender={products}/>
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