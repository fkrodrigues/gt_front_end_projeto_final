import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import miniCart from '../assets/mini-cart.svg';

import { FiSearch } from "react-icons/fi";

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import SidebarBurger from "./SidebarBurger";
import SearchBar from "./SearchBar";

const Header = () => {

  const [isOpen, setOpen] = useState(false);



  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className="
        h-45 px-25 py-5 bg-white
        max-sm:w-[100%]
        max-sm:h-[60px] 
        max-sm:items-center
        max-sm:flex
        max-sm:relative
        "
    >
     <div
        className="
           max-sm:absolute
           max-sm:left-0
           max-sm:top-2
           max-sm:z-3
           hidden max-sm:block
         "
       >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#474747"
          rounded
          size={20}
        />
           {isOpen && (
           <SidebarBurger/>
          )}
      </div>

      <div
        className="
              flex justify-between items-center
              max-sm:w-[274px] 
              max-sm:justify-end
              max-sm:items-baseline
              max-sm:

            "
        >
        <div
          className="
                 max-sm:w-[118px] max-sm:h-[24px]
                 max-sm:mr-14
                "
        >
          <Logo />
        </div>

        <div className="relative">
          <input
          className="
              bg-gray-100
                rounded-lg
                w-xl h-14
                p-5                      max-sm:hidden    
            "
            type="search"
            placeholder="Pesquisar produto..."
          />
          <a href="#">
            <FiSearch
              onClick={toggleSearch}
              className="
              max-sm:active:text-[#c92071]
                max-sm:static
                max-sm:w-[22px]
                max-sm:mr-4
                absolute
                bottom-4 right-5 text-gray-400 w-[25px] h-[25px] hover:text-gray-300"
            />
          </a>
        </div>

        <div
          className="
                max-sm:hidden
                text-[#474747]"
        >
          <a href="#">Cadastre-se</a>
          <div
            className="
                      w-full h-[1px]
                      bg-[#474747]
                    "
          ></div>
        </div>

        <Button
          label="Entrar"
          className="
          max-sm:hidden
            bg-[#c92071] text-white
            p-2.5 rounded-[8px]
            w-[114px] text-[.9rem]
            tracking-widest
            hover:bg-[#db2777]
          "
        />

        <div className="relative w-[33px] h-[29px] ">
          <img
            className=" w-[18.5px] h-[35px]
                    "
            src={miniCart}
            alt="carrinho"
          />
          <div className=" bg-[#db2777] w-[17px] h-[17px] absolute rounded-[100%] top-0 right-1 flex justify-center items-center ">
            <div className="text-white  text-[12px]">2</div>
          </div>
        </div>
      </div>

      <div
        className="
              mt-8 -translate-x-2
              max-sm:absolute
              max-sm:hidden
            "
      >
        <ul 
          className="
               flex gap-8 h-[25px]
               text-gray-700
               max-sm:flex-col
               max-sm:gap-2
               max-sm:ml-8
               max-sm:mt-9
              "
        >
          <div
            className="
                text-[#474747]
                mb-4
                hidden max-sm:block
              "
          >
            <h4>Páginas</h4>
          </div>

          <li
            className=" w-[60px] relative transition duration-300 hover:text-[#c92071] text-center
                max-sm:text-left
                "
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li className=" w-[80px] relative transition duration-300 hover:text-[#c92071]">
            <NavLink to={"/products"}>Produtos</NavLink>
          </li>

          <li className=" w-[90px] relative transition duration-300 hover:text-[#c92071]">
            <NavLink to={"/categories"}>Categorias</NavLink>
          </li>

          <li className=" relative transition duration-300 hover:text-[#c92071]">
            <NavLink to={"/pedidos"}>Meus Pedidos</NavLink>
          </li>
        </ul>
        
      </div>
        
        <div className={`
             hidden
             ${isSearchOpen ? 'max-sm:block' : 'max-sm:hidden'}
             max-sm:absolute
             max-sm:bg-white
             max-sm:left-0
             max-sm:-bottom-18
             max-sm:z-3
             max-sm:flex
             max-sm:justify-center
             max-sm:w-[23.45rem]
             shadow-md
             `}>
             <SearchBar/>
        </div>

    </header>
  );
};

export default Header;
