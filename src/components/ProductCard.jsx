
import { Link } from "react-router-dom";


const ProductCard = ({discount, image, type, name, price, priceDiscount}) => {

 

    return ( 
      <Link to={"/products/1"}>
        <div className="
          w-[300px] h-[439px]
          max-sm:w-[100%]
        
        ">
            <div className="relative
             bg-white shadow-sm rounded-[5px]
               w-[315px] h-[347px]  
             ">
                <div className='
                    absolute
                    bg-[#E7FF86]
                    rounded-[29px]
                    w-[96px] h-[32px]
                    top-[20px] left-[20px]
                    text-[14px] font-bold
                    text-[#474747]
                    flex justify-center 
                    items-center
                '>{discount}</div>

                 <div className='
                    flex justify-center items-center
                    h-full
                    '>
                    <img className='
                     -rotate-30 rounded-[10px]
                     ' src={image} alt="Tênis"/>
                </div>

                <div className="
                  text-[14px] font-bold
                   text-[#8F8F8F] my-2
                   tracking-[.75px]
                ">{type}</div>

                <div className="
                  text-[#474747] text-[26px]
                ">{name}</div>

                <div className="flex gap-3">
                    <div className="
                  text-[#8F8F8F] text-[24px]
                    line-through decoration-[1.5px]
                ">{price}</div>

                    <div  className="
                  text-[#1F1F1F] text-[24px]
                  font-bold 

                ">{priceDiscount}</div>
                </div>
            </div>
        </div>
      </Link>
     );
}
 
export default ProductCard;