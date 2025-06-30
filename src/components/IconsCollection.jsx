import { BsHeadphones } from "react-icons/bs";
import { GiBilledCap, GiRunningShoe } from "react-icons/gi";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPants } from "react-icons/pi";

const IconsCollection = () => {
    return ( 
        <div className="
          flex flex-col items-center
          w-full
          gap-4
          mb-[70px] mt-3
          max-sm:mb-0
          max-sm:ml-
          max-sm:overflow-scroll
          max-sm:w-[23.4rem]
          
        ">
          <div className="
          flex gap-10
          max-sm:gap-3
          max-sm:
          max-sm:ml-45
          ">

            <div className="flex flex-col
               items-center gap-3
               ">
               <div className="
                    bg-white w-[6.8rem] h-[6.8rem]
                    rounded-[100%]
                     flex justify-center items-center
                     max-sm:w-[6rem]
                     max-sm:h-[6rem]
                  ">
                    <a href="#">
                    <LiaTshirtSolid className="
                       w-[100px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Camisetas</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[6.8rem] h-[6.8rem]
                    rounded-[100%]
                     flex justify-center items-center
                     max-sm:w-[6rem]
                     max-sm:h-[6rem]
                  ">
                    <a href="#">
                    <PiPants className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Calças</p>
              </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[6.8rem] h-[6.8rem]
                    rounded-[100%]
                     flex justify-center items-center
                     max-sm:w-[6rem]
                     max-sm:h-[6rem]
                  ">
                    <a href="#">
                    <GiBilledCap className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Bonés</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[6.8rem] h-[6.8rem]
                    rounded-[100%]
                     flex justify-center items-center
                     max-sm:w-[6rem]
                     max-sm:h-[6rem]
                  ">
                    <a href="#">
                    <BsHeadphones className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Headphones</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[6.8rem] h-[6.8rem]
                    rounded-[100%]
                     flex justify-center items-center
                     max-sm:w-[6rem]
                     max-sm:h-[6rem]
                  ">
                    <a href="#">
                    <GiRunningShoe className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Tênis</p>
            </div>


          </div>

        </div>

     );
}
 
export default IconsCollection;