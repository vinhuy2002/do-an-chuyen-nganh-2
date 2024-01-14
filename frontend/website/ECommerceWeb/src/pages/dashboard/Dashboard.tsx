import { useState } from "react";
import Home from "./components/Home";
import MenuIndex from "./menu/MenuIndex";
import HomeUser from "./components/user/HomeUser";
import HomeProduct from "./components/product/HomeProduct";
import HomeCart from "./components/cart/HomeCart";

const Dashboard = () => {
  const [toggle, setToggle] = useState("home");
  const Toggle = (value:string) => {
    setToggle(value);
  }
  return (
    <div className="container-fluid bg-white min-vh-100 g-0">
      <div className="row g-0">
        {toggle && <div className="col-2 shadow-lg vh-100" style={{ backgroundColor: "#0077b6" }} >
          <MenuIndex HandleClick={Toggle} />
        </div>}
        <div className="col">
          {"home" === toggle ? (
              <HomeUser Toggle={toggle}/>
            ) 
          : "user" === toggle ?
            (
              <HomeUser Toggle={toggle}/>
            )
          : "product" === toggle ? 
            (
              <HomeProduct Toggle={toggle}/>
            )
          : "cart" === toggle ? 
            (
              <HomeCart Toggle={toggle}/>
            )
          : (<p>hello my fen</p>)
          }
        </div>
      </div>
    </div>
  );
}
export default Dashboard;