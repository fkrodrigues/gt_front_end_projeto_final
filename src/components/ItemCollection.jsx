import { Button } from 'primereact/button';

const ItemColecao = ({ titleCard, image,discount}) => {
    return ( 
        <div>
            
            <div className="
              w-[405px] h-[251px] relative
              max-sm:w-[21rem]
              max-sm:h-full
              max-sm:bg-blue-100
            ">
                <div className='
                    absolute
                    bg-[#E7FF86]
                    rounded-[1rem]
                    w-[96px] h-[32px]
                    top-[1rem] left-[1.5rem]
                    text-[.9rem] font-[700]
                    text-[#474747]
                    flex justify-center items-center
                '>{discount}</div>
                <div className='
                    absolute
                    top-[3.6rem]
                    left-[1.5rem]
                    text-black
                    font-bold text-[2rem]
                    w-[190px]
                    leading-[36px]
                '>{titleCard}</div>
                <div className='
                      absolute
                      bottom-[30px]
                      left-[1.5rem] 
                      max-sm:top-[9rem]          
                    '>
                    <Button label="Comprar"
                    className="
                        bg-[#F5F5F5]
                        text-[#db2777]
                        p-2.5 rounded-[8px]
                        w-[9.5rem] h-[3rem] 
                        text-[.9rem]
                        tracking-[1px]
                        hover:bg-[#ffffff]
                    "/>
                </div>
                <div className='gap-[50px]'>
                    <img className=' rounded-[10px]' src={image} alt={image} />
                </div>
            </div>
        </div>
     );
}
 
export default ItemColecao;