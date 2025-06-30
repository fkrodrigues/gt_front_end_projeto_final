import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

const SidebarBurger = () => {
    return ( 
    <div
        className="
          max-sm:bg-[#47474793]
            max-sm:w-[23.4rem]
            max-sm:h-[389rem]
            max-sm:absolute
            max-sm:top-13
            
          "
        >
        <div
          className="
             bg-white
              z-3
              h-[700px]
              max-sm:w-[300px]
              max-sm:absolute
              flex flex-col justify-between
              "
            >
             <ul
            className="
               flex gap-8 h-[25px]
               text-gray-700
               max-sm:flex-col
               max-sm:gap-2
               max-sm:ml-8
               max-sm:mt-8
          
              "
          >
            <div
              className="
                text-[#474747]
                 mb-4
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

            <div className="
              flex flex-col items-center
              w-[100%] p-5
            ">
                <div
                    className="
                    text-[#474747]
                     flex flex-col items-center
                     gap-3
                    " >

                    <div
                    className="
                    w-[15rem] h-[1px]
                    bg-[#dadada]
                    "
                    ></div>
                    
                   <Button
                    label="Entrar"
                    className="
                    bg-[#c92071] text-white
                    p-2.5 rounded-[8px]
                    w-[15rem] text-[.9rem]
                     tracking-widest
                   hover:bg-[#db2777]
                   "
                     />
                     
                    <a className="
                      border-b-2 border-[#989898]
                    " href="#">Cadastre-se</a>
                    
                     </div>
            </div>

         </div>
           
     </div>
  );
}
 
export default SidebarBurger;