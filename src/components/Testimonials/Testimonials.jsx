import ima1 from "../../assets/testimonio/ficafe.jpg"
import ima2 from "../../assets/testimonio/produce.jpg"
import ima3 from "../../assets/testimonio/feria.jpg"
import ima4 from "../../assets/testimonio/mype.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Rueda de Negocios 2024 FICAFE.",
    text: "Asistir a la Rueda de Negocios 2024 FICAFE fue una experiencia invaluable. Tuve la oportunidad de conectar con productores, distribuidores y empresarios del sector cafetalero, lo que me permitió conocer de cerca las últimas tendencias del mercado y fortalecer nuestras relaciones comerciales. Además, pude explorar nuevas oportunidades de colaboración y obtener información clave sobre innovaciones tecnológicas aplicadas al sector.",
    img: ima1,
  },
  {
    id: 2,
    name: "Expo Alimentaria 2024",
    text: "Participar en Expo Alimentaria 2024 fue una experiencia única para nuestro negocio. Tuvimos la oportunidad de exhibir nuestros productos de café, interactuar con potenciales clientes y aprender de las tendencias más actuales del sector alimentario. Además, fue el espacio perfecto para fortalecer la visibilidad de nuestra marca y establecer alianzas estratégicas con otros emprendedores y empresas del rubro. ",
    img: ima2,
  },
  {
    id: 3,
    name: "III festival y concurso de cafés especiales",
    text: "El III Festival y Concurso de Cafés Especiales fue una experiencia increíble que nos permitió mostrar la calidad de nuestros productos en un evento que reunió a los mejores productores de café. Fue emocionante compartir nuestra pasión por el café con expertos y consumidores, y recibir retroalimentación sobre nuestro trabajo.",
    img: ima3,
  },
  {
    id: 4,
    name: "Feria de los MYPES",
    text: "La Feria de los MYPES fue una excelente oportunidad para dar a conocer nuestra marca y productos a un público más amplio. Fue un evento lleno de energía y dinamismo, donde tuvimos la posibilidad de interactuar directamente con otros emprendedores, clientes potenciales y referentes del sector. Además, fue una ocasión ideal para recibir retroalimentación valiosa, identificar tendencias del mercado y fortalecer nuestra presencia en el mercado local.",
    img: ima4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Nuestras Experiencias
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Conócenos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            En Don Gastón, nos dedicamos a ofrecer los mejores productos de café, cultivados y seleccionados con esmero en las tierras de Huánuco. Nuestra misión es llevar el auténtico sabor y la frescura de nuestra región a cada taza, garantizando calidad en cada etapa del proceso, desde la cosecha hasta el producto final. ¡Disfruta de un café único, hecho con pasión y tradición!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
