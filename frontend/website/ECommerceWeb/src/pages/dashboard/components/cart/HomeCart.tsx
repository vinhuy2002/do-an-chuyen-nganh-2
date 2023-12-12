import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import ListCart from "./ListCart";

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
            : (<p>delete button clicked</p>)
            }
        </div>
    )
}
export default HomeCart;