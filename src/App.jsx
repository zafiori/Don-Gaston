import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]); // Estado para el carrito de compras

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title && item.color === product.color
      );
      
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setOrderPopup(true); // Abrir popup al agregar producto
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div id="quienes-somos">
        <Hero />
      </div>
      <div id="productos">
        <Products addToCart={addToCart} /> {/* Pasar función addToCart */}
      </div>
      <div id="recomendados">
        <TopProducts />
      </div>
      <div id="caracteristicas">
        <Banner />
      </div>
      {/* <Subscribe /> */}
      <div id="conocenos">
        <Testimonials />
      </div>
      <Footer />
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        cart={cart} // Pasar el carrito al popup
        setCart={setCart} // Pasar la función setCart al popup para modificar el carrito
      />
    </div>
  );
};

export default App;

