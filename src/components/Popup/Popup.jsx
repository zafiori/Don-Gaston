import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai"; // Ícono para eliminar

const Popup = ({ orderPopup, setOrderPopup, cart, setCart }) => {
  // Función para eliminar un producto del carrito
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart[index]; // Obtener el producto que se desea eliminar
      // Si la cantidad es mayor a 1, solo disminuirla
      if (itemToRemove.quantity > 1) {
        return prevCart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Si la cantidad es 1, eliminar el producto
        return prevCart.filter((_, i) => i !== index);
      }
    });
  };

  // Función para manejar la compra
  const handleBuy = () => {
    const productDetails = cart
      .map(
        (item) =>
          `${item.title} - ${item.color} - ${item.quantity}x S/.${item.price} = S/.${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const message = `¡Hola! Estoy interesado en los siguientes productos:

      ${productDetails}
      
      Total: S/.${total}

      ¡Gracias!`;

    const phoneNumber = "978208574"; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setCart([]);
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-md shadow-md w-[300px] p-4">
            <div className="flex items-center justify-between mb-4">
              <h1
                id="popup-title"
                className="text-lg font-semibold text-gray-800 dark:text-white"
              >
                Tu Carrito
              </h1>
              <IoCloseOutline
                className="text-2xl text-gray-600 dark:text-gray-400 cursor-pointer"
                onClick={() => setOrderPopup(false)}
                role="button"
                aria-label="Close popup"
              />
            </div>

            <div>
              {cart.length === 0 ? (
                <p className="text-gray-500">Tu carrito está vacío.</p>
              ) : (
                <ul className="space-y-2">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.color}</p>
                      </div>
                      <div className="text-sm font-bold text-primary">
                        S/.{item.price} x {item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(index)} // Llamar a removeFromCart
                        className="text-red-500 hover:text-red-700"
                      >
                        <AiOutlineDelete />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 text-right">
              <p className="text-lg font-semibold text-gray-700">
                Total: S/.
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleBuy} // Llamar a handleBuy al hacer clic en "Comprar"
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Comprar
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setOrderPopup(false)}
                className="bg-primary text-white py-2 px-6 rounded-full"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Popup;
