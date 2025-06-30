import Collection from "../components/Collection";
import IconsCollection from "../components/IconsCollection";
import LastBannerHome from "../components/LastBannerHome";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Gallery from "../components/Gallery";

import slide1 from "/public/home slide 1.png";
import slide2 from "/public/home slide 2.jpeg";
import slide3 from "/public/home slide 3.jpeg";
import slide4 from "/public/home slide 4.png";
import slide5 from "/public/home slide 5.png";
import slide6 from "/public/home slide 6.png";
import slide7 from "/public/home slide 7.png";
import slide8 from "/public/home slide 8.png";

import camisa from "/public/camisa.png";
import tenis from "/public/tenis.png";
import fone from "/public/fone.png";

import tenisAlta from "/public/tenisAlta.png";




const Home = () => {

  const ShowMore = {
    text: `ver mais ${"\u2192"}`,
    href: "#",
  }

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
  ]

  const infosSection1 = {
      title: "Coleções em Destaque",
      titleAlign: "left",
  }

  const dataCollection = [
      {
        titleCard: 'Novo drop Supreme',
        image: camisa,
        discount:"80% OFF"
      },

      {
        titleCard: "Coleção Adidas",
        image: tenis,
        discount:"45% OFF"
      },

      {
        titleCard: "Novo Beats Bass",
        image: fone,
        discount:"59% OFF"
      }
  ]
   
  const infosSection2 = {
      title: "Coleções em Destaque",
      titleAlign: "center",
  }

  const infosSection3 = {
      title: "Produtos em alta",
      titleAlign: "left",
  }

  const imageSlide = [
    {id: 1, src: slide1},
    {id: 2, src: slide2},
    {id: 3, src: slide3},
    {id: 4, src: slide4},
    {id: 5, src: slide5},
    {id: 6, src: slide6},
    {id: 7, src: slide7},
    {id: 8, src: slide8},
];

  return ( 
    <div className="
      w-[100%]
      max-sm:w-[23.4rem]
    ">
        <Gallery 
        show="banner"
        imageSlide={imageSlide}
        />
        <Section 
          children={
            <Collection 
              dataCollection={dataCollection}
            />}
          title={infosSection1.title}
          titleAlign={infosSection1.titleAlign}
        />
        <Section 
          children={<IconsCollection />}
          title={infosSection2.title}
          titleAlign={infosSection2.titleAlign}
          />
        <Section 
          children={<ProductListing arrayProductCard={arrayProductCard}/>} 
          title={infosSection3.title}
          titleAlign={infosSection3.titleAlign} 
          ShowMore={ShowMore} 
        />
        <LastBannerHome/>

    </div>
   );
}
 
export default Home;