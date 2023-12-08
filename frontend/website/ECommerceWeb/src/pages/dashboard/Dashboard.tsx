import { useState } from "react";
import Home from "./components/Home";
import MenuIndex from "./menu/MenuIndex";
import TopbarIndex from "./topbar/TopbarIndex";
// import "./css/sb-admin-2.css";
// import "./css/sb-admin-2.min.css";
// import "./css/styles.css";
const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="container-fluid bg-white min-vh-100 g-0">
      <div className="row g-0">
        {toggle && <div className="col-2 shadow-lg vh-100" style={{ backgroundColor: "#0077b6" }} ><MenuIndex /></div>}
        <div className="col">
          <Home Toggle={Toggle}/>
        </div>
      </div>

    </div>
  );
}
export default Dashboard;