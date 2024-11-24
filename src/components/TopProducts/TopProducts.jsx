import Img1 from "../../assets/productos-vendidos/grano.png";
import Img2 from "../../assets/productos-vendidos/molido.png";
import Img3 from "../../assets/productos-vendidos/molido2.png";

import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Café en grano de 1 kg",
    description:
      "Disfruta del auténtico sabor de Huánuco con nuestro café en grano de 1 kg.",
  },
  {
    id: 2,
    img: Img2,
    title: "Café molido de 500 gr",
    description:
      "Nuestro café molido de 500 g ofrece el auténtico, listo para preparar y disfrutar.",
  },
  {
    id: 3,
    img: Img3,
    title: "Café molido de 250 gr",
    description:
      "Nuestro café molido de 250 g ofrece el auténtico, listo para preparar y disfrutar.",
  },
];

const TopProducts = () => {
  return (
    <section id="recomendados" className="top-products-section">
      <div className="container">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Mejores productos
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Productos</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Nuestros productos más vendidos destacan por su calidad excepcional, 
            reflejando el auténtico sabor y el cuidado de nuestra tierra.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
