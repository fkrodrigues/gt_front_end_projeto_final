import ItemCollection from "./ItemCollection";


const ColecoesDestaque = ({dataCollection}) => {

    return ( 

        <>
          <div className=" 
            w-[1320px] h-[267px]
            flex justify-between
            mx-[6.2rem] text-[#1F1F1F] 
            gap-[12px]
            mt-1
            max-sm:flex-col
            max-sm:ml-0
            max-sm:w-[23.4rem]
            max-sm:h-[650px]
            max-sm:items-center
            max-sm:mx-0
            max-sm:mt-0
            ">
          {dataCollection.map((item, index) => (
          <ItemCollection key={index} titleCard={item.titleCard} image={item.image} discount={item.discount}/>
          ))}
          </div>
        </>

     );
}
 
export default ColecoesDestaque;