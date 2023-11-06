import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
          <div className="bg-[#010F1C]">
          <Navbar></Navbar>
          </div>
           <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;