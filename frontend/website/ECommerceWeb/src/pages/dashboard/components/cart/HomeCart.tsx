import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import ListCart from "./ListCart";
import DetailCart from "./DetailCart";

const HomeCart = ({ Toggle }: { Toggle: string }) => {
    const [action, setAction] = useState("");
    const [selectedData, setSelectedData] = useState<any | null>(null);
    const Action = (value: string, data?: any) => {
        setAction(value);
        if (data) {
            setSelectedData(data);
        }
    }
    
    return (
        <div>
            <TopbarIndex Toggle={Toggle} />
            <h2>Quản lý hóa đơn</h2>
            {"" === action ? (
                <ListCart Action={Action}/>
            ) 
            : (<DetailCart Action={Action} data={selectedData}/>)
            }
        </div>
    )
}
export default HomeCart;