import { useState } from "react";
import FilterBy from "../components/FilterBy";
import ProductListing from "../components/ProductListing";
import { CiFilter } from "react-icons/ci";
import tenisAlta from "/public/tenisAlta.png";


const ProductListingPage = () => {

    const arrayFilters = [
         
            {
               "title":"Marca",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Adidas"
                  },
                  {
                     "checked":false,
                     "text":"Calenciaga"
                  },
                  {
                     "checked":true,
                     "text":"K-Swiss"
                  },
                  {
                     "checked":false,
                     "text":"Nike"
                  },
                  {
                     "checked":false,
                     "text":"Puma"
                  },
               ]
            },
            {
               "title":"Categoria",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Esporte e Lazer"
                  },
                  {
                     "checked":false,
                     "text":"Casual"
                  },
                  {
                     "checked":false,
                     "text":"Utilitário"
                  },
                  {
                     "checked":false,
                     "text":"Corrida"
                  }
               ]
            },
            {
               "title":"Gênero",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Masculino"
                  },
                  {
                     "checked":true,
                     "text":"Feminino"
                  },
                  {
                     "checked":false,
                     "text":"Unissex"
                  }
               ]
            },
            {
               "title":"Estado",
               "inputType":[
                  {
                     "radio":true,"checked": true,
                     "text":"Novo"
                  },
                  {
                     "radio":true, "checked": false,
                     "text":"Usado"
                  }
               ]
            }
         

    ]

    const arrayProductCard = [
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: tenisAlta,
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      }
    ]

    const [ isFilter, setFilter ] = useState(false)
   
    const toggleFilter = () => {
      setFilter(!isFilter)
   }

    return ( 
        <div className=" 
           flex flex-col items-center
           h-[2600px] 
           max-sm:relative
           max-sm:w-[375px]
           ">

          <div className="
            flex justify-between 
            w-[1300px] my-10
            max-sm:w-[100%]
            max-sm:flex-col
            max-sm:my-0
            max-sm:p-5
            max-sm:relative
            max-sm:h-[160px]
          ">

            <div className="
              flex
              max-sm:my-8
              max-sm:translate-y-15
            ">
               <h4>Resultado para "Tênis"</h4>
               <p> - 389 produtos</p>
            </div>

            <div className="
              flex gap-1 border-1 p-3
              rounded-lg
              max-sm:p-5
              max-sm:-translate-y-20
              max-sm:w-[20em]
              max-sm:text-[80%]

              ">
               <h4>
                  <label htmlFor="ordenar">
                  Ordenar por: 
                  </label>
               </h4>
               <select id="ordenar">
                 <option value="op1">mais relevantes
                 </option>
                 <option value="op2">maior preço</option>
                 <option value="op3">menor preço</option>
               </select>
            </div>

         <div className={`
            hidden max-sm:flex 
            w-[59px] h-[59px]
            bg-[#C92071]
            rounded-lg
            justify-center items-center
            text-white text-4xl
            absolute
            right-5
            top-7
            active:bg-[#77044d]
          `}>
          <CiFilter  onClick={toggleFilter} />
         </div>

          </div>

          <div className="
           flex w-[1300px] relative 
           max-sm:w-full 
           ">

             <div
             onClick={toggleFilter}
             className={`
               ${isFilter? 'max-sm:flex':'max-sm:hidden'}
                flex flex-wrap w-[1300px]
                h-[720px] relative
                max-sm:w-[100%]
                max-sm:absolute
                max-sm:top-0
                max-sm:bg-[#47474793]
                max-sm:h-[170em]
                max-sm:z-3
             `}>
                <div className="
                  bg-white
                  w-[280px]
                  text-[#474747]
                  max-sm:h-[700px]
                  
                  ">
                   <h4 className="my-5 ml-5  w-30">Filtrar por</h4>
                   <hr className="
                    text-[#CCCCCC] w-[220px]
                     ml-5
                    "/>
                   <FilterBy arrayFilters={arrayFilters}/>
                </div>
             </div>

             <div
               className="
               w-[80%] flex ml-8
               max-sm:ml-0
               max-sm:w-[375px]
               max-sm:h-[2370px]
               max-sm:flex-col
               max-sm:overflow-hidden
               ">
                  <ProductListing arrayProductCard={arrayProductCard}/>
            </div>

           </div>
          
        </div>
     );
}
 
export default ProductListingPage;