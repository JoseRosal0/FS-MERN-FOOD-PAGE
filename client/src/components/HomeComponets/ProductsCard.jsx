import { useContext } from "react";
import { MyContext } from "../../context/myContext";
import car from "../../assets/car.svg"


export const Card = () => {
  const {number,products}=useContext(MyContext)
  return (
    <>
      {products.slice(0,number).map(({ name, description, img, price }, index) => (
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