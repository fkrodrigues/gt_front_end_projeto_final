import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logoFooter from "/src/assets/logo-footer.svg";

const Footer = () => {
  return (
    <div className="
    bg-[#1F1F1F]
     w-full
     flex flex-col items-center
     max-sm:relative
     max-sm:w-[100%]
     max-sm:z-5
    ">
        <div className="
         text-white
          px-[100px] pt-[4rem]
          flex justify-between
          w-full
          relative
          max-sm:flex-col
          max-sm:items-center
          max-sm:w-[20rem]
          max-sm:ml-0
          max-sm:pt-[3rem]
        ">
          <div className="
          w-[18rem] h-[14rem]
          max-sm:h-[13rem]
          ">
            <h2 className="
              mb-[40px]
              max-sm:w-[10rem]
              max-sm:h-[1.8]
              max-sm:mb-[1rem]
            ">
              <img src={logoFooter} alt="" />
            </h2>
            <p className="
              mb-[40px]
               leading-7 text-justify
               max-sm:text-[.8rem]
               max-sm:leading-5
               max-sm:mb-[2rem]
               ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              fugiat repellendus nemo iure eligendi quos neque.
            </p>
            <ul className="
              flex justify-between
              w-[90px]
              text-[#d0d0d0]
            ">
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>

          <div className="
              flex gap-50
              max-sm:-translate-x-3
              max-sm:gap-15
              max-sm:mb-15
              max-sm:leading-5
              max-sm:text-[.8rem]
              max-sm:h-[16rem]
            ">
            <div >
              <h3 className="mb-9 font-">Informação</h3>
              <ul
                className="
                  flex flex-col gap-4
                  tracking-[1px]
                  text-[.9rem]
                  text-[#d0d0d0]
                  max-sm:text-[.8rem]
                  max-sm:w-[8rem]
                ">
                  <li className="hover:text-white">
                    <a href="#">Sobre Drip Store</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Segurança</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Wishlist</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Blog</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Trabalhe Conosco</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Meus Pedidos</a>
                  </li>
              </ul>
            </div>
            <div >
              <h3 className="mb-9 font-">Categorias</h3>
              <ul className="
                  flex flex-col gap-4
                  tracking-[1px]
                  text-[.9rem] text-[#d0d0d0]
                  max-sm:text-[.8rem]
                  ">
                  <li className="hover:text-white">
                    <a href="#">Camisetas</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Calças</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Bonés</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Headphones</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Tênis</a>
                  </li>
              </ul>
            </div>
          </div>
          
          <div className="
                flex flex-col
                tracking-[1px]
                text-[.9rem]
                w-[220px]
                text-justify
                text-[#e4e4e4]
                max-sm:-translate-x-7
                max-sm:w-[15rem]
                ">
            <h3 className="
             mb-9 
             max-sm:text-[.9rem]
             max-sm:mb-5
             ">Contato</h3>
            <p className="
            mb-6
            max-sm:text-[.8rem]
            
            ">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p className="max-sm:text-[.8rem]">(85) 3051-3411</p>
          </div>
        
        </div>

        <div className="
          bg-[#797979]
            w-[1350px] h-[1px]
            my-6
            max-sm:w-[20rem]
          ">
        </div>

        <div className="
        text-white text-[.8rem]
          tracking-[.5px]
          mb-6
        ">
            <p className="max-sm:text-[.7rem]">
            &copy; 2025 Digital College
            </p>
        </div>

    </div>
  );
};

export default Footer;
