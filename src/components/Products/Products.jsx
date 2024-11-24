import PropTypes from "prop-types"; // Importar prop-types
import Img1 from "../../assets/productos/grano-1.jpeg";
import Img2 from "../../assets/productos/grano-500.jpeg";
import Img3 from "../../assets/productos/grano-250.jpeg";
import Img4 from "../../assets/productos/molido-1.jpeg";
import Img5 from "../../assets/productos/molido-500.jpeg";
import Img6 from "../../assets/productos/molido-250.jpeg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Café en grano",
    price: 45,
    color: "1 kg",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Café en grano",
    price: 25,
    color: "500 gr",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Café en grano",
    price: 15,
    color: "250 gr",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Café molido",
    price: 45,
    color: "1 kg",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Café molido",
    price: 25,
    color: "500 gr",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Café molido",
    price: 15,
    color: "250 gr",
    aosDelay: "1000",
  },
];

const Products = ({ addToCart }) => {
  return (
    <section id="productos" className="products-section">
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Todos nuestros productos
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Nuestros productos de café destacan como uno de los mejores de
              Huánuco, reconocidos por su calidad excepcional y el cuidado en
              cada etapa de su producción. Disfruta del auténtico sabor de
              nuestra tierra en cada taza.
            </p>
          </div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-5">
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="text-lg font-bold text-primary">
                      S/.{data.price}
                    </div>
                    <button
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4"
                      onClick={() => addToCart(data)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Validación de las props
Products.propTypes = {
  addToCart: PropTypes.func.isRequired, // Valida que `addToCart` sea una función obligatoria
};

export default Products;
