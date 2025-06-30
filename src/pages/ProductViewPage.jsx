import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions ";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import Gallery from "../components/ShowThumbs";

import tenisAlta from "/public/tenisAlta.png";

import img1 from "/public/produc-image-1.jpeg";
import img2 from "/public/produc-image-2.jpeg";
import img3 from "/public/produc-image-3.jpeg";
import img4 from "/public/produc-image-4.jpeg";
import img5 from "/public/produc-image-5.jpeg";

import thumb1 from "/public/product-thumb-1.jpeg";
import thumb2 from "/public/product-thumb-2.jpeg";
import thumb3 from "/public/product-thumb-3.jpeg";
import thumb4 from "/public/product-thumb-4.jpeg";
import thumb5 from "/public/product-thumb-5.jpeg";

const ProductViewPage = () => {


    
    const arrayInfoBuybox = [
        {
            name:"Tênis Nike Revolution 6 Next Nature Masculino",
            ref: "Casual | Nike | REF:38416711",
            rating:[
                {
                    id: 1,
                    stars: true
                },
                {
                    id: 2,
                    stars: true
                },
                {
                    id: 3,
                    stars: true
                },
                {
                    id: 4,
                    stars: true
                },
                {
                    id: 5,
                    stars: false
                },
            ],
            score: "4.7",
            qntAvaliation: "90 avaliações",
            priceDiscount:"219,00",
            price:"320,00",
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            tamanho:[ "39","40","41","42","43"],
            cor:[ "1","2","3","4","5"],
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
    ]

    const infosSection = {
        title: "Produtos em alta",
        titleAlign: "left",
    }

    const link = {
        text: `ver mais ${"\u2192"}`,
        href: "#",
      }

    const slideGallery = [
    {id: 1, src: img1},
    {id: 2, src: img2},
    {id: 3, src: img3},
    {id: 4, src: img4},
    {id: 5, src: img5},
   ];

   const imagesShowTrumbs = [
    { src: thumb1, alt: "Tênis" },
    { src: thumb2, alt: "Tênis" },
    { src: thumb3, alt: "Tênis" },
    { src: thumb4, alt: "Tênis" },
    { src: thumb5, alt: "Tênis" },
   ];


    return ( 
        <div className="
          flex flex-col
          relative
          w-[full]
         ">

           
          <p className="
              text-[#474747]
              mt-8 mb-9
              absolute
              left-24
              z-2
              w-[700px]
              text-[15px]
              max-sm:
              max-sm:w-[330px]
              max-sm:mb-5
              max-sm:text-[14px]
              max-sm:left-5
              max-sm:mt-5
              ">
              <strong>Home</strong> / Produtos / Tênis /Nike / Tênis Nike Revolution 6 Next Nature Masculino
          </p>
           

           <div className="
             flex h-[700px]
             mt-22
             max-sm:flex-col
             max-sm:items-center
             max-sm:w-[375px]
             max-sm:h-[940px]
             max-sm:ml-0
            ">
               <Gallery 
                 show="showThumbs"
                 slideGallery={slideGallery}
                 imagesShowTrumbs={imagesShowTrumbs}
               />
               <BuyBox 
               name={arrayInfoBuybox[0].name}
               ref={arrayInfoBuybox[0].ref}
               rating={arrayInfoBuybox[0].rating} 
               score={arrayInfoBuybox[0].score} 
               qntAvaliation={arrayInfoBuybox[0].qntAvaliation}
               priceDiscount={arrayInfoBuybox[0].priceDiscount}
               price={arrayInfoBuybox[0].price}
               description={arrayInfoBuybox[0].description}
               children={<ProductOptions/>}
               />
           </div>
           
           <Section 
             title={infosSection.title} 
             link={link}
           >
               <ProductListing arrayProductCard={arrayProductCard}/>
           </Section>
        </div>
     );
}
 
export default ProductViewPage;