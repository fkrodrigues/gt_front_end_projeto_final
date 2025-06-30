import BannerFinalHome from "./BannerFinalHome";
import tenisAmareloFinal from "/public/tenisAmareloFinal.png";

const LastBannerHome = () => {

    const contentBannerfinal = {
        image:tenisAmareloFinal,
        title:"Air Jordan edição de colecionador",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      }

    return ( 
        <>
            <BannerFinalHome 
          image={contentBannerfinal.image} 
          title={contentBannerfinal.title} description={contentBannerfinal.description} 
          />
        </>
     );
}
 
export default LastBannerHome;