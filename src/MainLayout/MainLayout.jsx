import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
          <div className="bg-[#010F1C]">
          <Navbar></Navbar>
          </div>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;