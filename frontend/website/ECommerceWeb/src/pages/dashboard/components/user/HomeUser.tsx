import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import CreateUser from "./CreateUser";
import ListUser from "./ListUser";
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
                <ListUser Action={Action}/>
            ) 
            : "createUser" === action ? (
                <CreateUser Action={Action}/>
            ) 
            : "updateUser" === action ? (
                <UpdateUser Action={Action}/>
            )
            : (<p>delete</p>)}

        </div>
    )
}
export default Home;