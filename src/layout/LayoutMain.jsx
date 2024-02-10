import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const LayoutMain = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <Outlet />
    </div>
  );
};

export default LayoutMain;
