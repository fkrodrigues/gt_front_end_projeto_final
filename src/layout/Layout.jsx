import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return ( 
        <div className="bg-red w-full" >
            <Header/>
            <Outlet />
            <Footer/>
        </div>
     );
}
 
export default Layout;