import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok, // Importamos el ícono de TikTok
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Quienes somos",
    link: "/#quienes-somos",
  },
  {
    title: "Productos",
    link: "/#productos",
  },
  {
    title: "Recomendados",
    link: "/#recomendados",
  },
  {
    title: "Características",
    link: "/#caracteristicas",
  },
  {
    title: "Conócenos",
    link: "/#conocenos",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo Don Gastón" className="max-w-[50px]" />
              Don Gastón
            </h1>
            <p>
              Una empresa huanuqueña dedicada a la venta del mejor café.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Nosotros
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
    
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/dongastonsac?igsh=M3lmMm05NThreWV2" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/DonGastonsac" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.tiktok.com/@dongaston_cafepremium" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-3xl" /> {/* Cambié el ícono de LinkedIn por TikTok */}
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Urbanización Leoncio Prado, Huánuco, Huánuco</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+51 978208574</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
