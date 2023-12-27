import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import ListCart from "./ListCart";
import DetailCart from "./DetailCart";

const HomeCart = ({ Toggle }: { Toggle: string }) => {
    const [action, setAction] = useState("");
    const Action = (value: string) => {
        setAction(value);
    }
    
    return (
        <div>
            <TopbarIndex Toggle={Toggle} />
            <h2>Quản lý hóa đơn</h2>
            {"" === action ? (
                <ListCart Action={Action}/>
            ) 
            : (<DetailCart Action={Action}/>)
            }
        </div>
    )
}
export default HomeCart;