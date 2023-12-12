import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import InforUser from "./InforUser";
import UpdateUser from "./UpdateUser";


const Home = ({ Toggle }: { Toggle: string }) => {
    const [action, setAction] = useState("");
    const Action = (value: string) => {
        setAction(value);
    }
    
    return (
        <div>
            <TopbarIndex Toggle={Toggle} />
            <h2>Quản lý người dùng</h2>
            {"" === action ? (
                <InforUser Action={Action}/>
            )
            : "updateUser" === action ? (
                <UpdateUser Action={Action}/>
            )
            : (<p>delete button in user clicked</p>)}

        </div>
    )
}
export default Home;