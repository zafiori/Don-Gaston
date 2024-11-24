import PropTypes from "prop-types"; // Importar prop-types
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Quienes somos",
    link: "/#quienes-somos",
  },
  {
    id: 2,
    name: "Productos",
    link: "/#productos",
  },
  {
    id: 3,
    name: "Recomendados",
    link: "/#recomendados",
  },
  {
    id: 4,
    name: "Características",
    link: "/#caracteristicas",
  },
  {
    id: 5,
    name: "Conócenos",
    link: "/#conocenos",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Don Gastón
            </a>
          </div>

          {/* Search bar and controls */}
          <div className="flex justify-between items-center gap-4">
            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Validación de las props
Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired, // Especifica que debe ser una función y es requerida
};

export default Navbar;

