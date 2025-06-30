import { Button } from "primereact/button";

const BannerFinalHome = ({image, title, description, }) => {
    return ( 
      <div className=" bg-white 
          flex justify-center items-center
          gap-15
          h-[553px]
          max-sm:w-[23.4rem]
          max-sm:h-[46rem]
          max-sm:flex-col
         ">

          <div className="
            w-[575px] h-[330px]
            max-sm:w-[19rem]
            max-sm:h-[10rem]
          ">
            <img src={image} alt=""></img>
          </div>

          <div className="flex flex-col 
            w-[590px] h-[330px]
            max-sm:w-[23rem]
            max-sm:p-5
            max-sm:h-[30rem]
          ">
              <div className="
                text-[#C92071] text-[14px]
                font-bold mb-6
                max-sm:text-[#F6AA1C]
              ">Oferta Especial
              </div>

              <div className="
                text-[#474747] text-[3rem]
                font-bold leading-12 mb-7
                max-sm:text-[2.3rem]
                max-sm:leading-10
              ">{title}</div>
             
              <div className="
                mb-6 text-[#474747] tracking-widest
              ">{description}</div>
               <Button label="Ver Ofertas"
                    className="
                    bg-[#c92071] text-white
                    p-2.5 rounded-[8px]
                    w-[210px] text-[.9rem]
                    tracking-[1px]
                    hover:bg-[#db2777]
                "/>
            </div>

        </div>
     );
}
 
export default BannerFinalHome;