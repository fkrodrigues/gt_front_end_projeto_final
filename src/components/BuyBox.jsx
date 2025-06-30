import { Button } from 'primereact/button';
import RatingNote from './RatingNote';


const BuyBox = ({name, ref, rating, score, qntAvaliation, priceDiscount, price, description, children}) => {

    return ( 
        <div className='
         w-[440px] h-[570px]
         ml-10
         max-sm:w-[335px]
         max-sm:ml-0
         max-sm:h-[700px]
         max-sm:mt-5
        '>

          <h1 className='
            leading-[40px] font-bold
            text-[#1F1F1F] text-[35px]
          '>{name}</h1>
          <p className='
             text-[#666666] text-[12px]
             py-3
          '>{ref}
          </p>
          <RatingNote
          stars={rating}
          score={score} 
          qntAvaliation={qntAvaliation}
          />
          <div className='
            flex items-baseline-last 
            gap-2 py-3
          '>

            R$<div className='
            flex items-end mb-0
            text-[30px] text-[#474747]
            font-bold
            '>{priceDiscount}</div>

            <div  className='
            text-[15px] text-[#CCCCCC]
            line-through
            '>R$ {price}</div>

          </div>

          <h4 className='
          text-[#8F8F8F] mb-2
          '>Descrição do produto</h4>
          <div className='
          text-[#474747] 
          '>{description}</div>

          <div className='py-3'
          
          >{children}</div>
          
          <Button label="Comprar"
              className="
              bg-[#FFB31F] text-white
              p-2.5 rounded-[8px]
              w-[220px] text-[.9rem]
              tracking-widest
              hover:bg-[#ffbe1a]
              max-sm:w-[335px]
            "/>
        </div>
     );
}
 
export default BuyBox;