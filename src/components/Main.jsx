import { useState } from "react";
import Products from "./Products";
import Popup from "./Popup";

const Main = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setOrderPopup(true); // Mostrar el popup cuando se agregue un producto
  };

  return (
    <div>
      <Products addToCart={addToCart} />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} cart={cart} />
    </div>
  );
};

export default Main;
