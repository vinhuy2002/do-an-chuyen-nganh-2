import TopbarIndex from "../../topbar/TopbarIndex";
import { useState } from "react";
import CreateProduct from "./CreateProduct";
import ListProduct from "./ListProduct";
import UpdateProduct from "./UpdateProduct";
import HomeCategory from "./HomeCategory";

const HomeProduct = ({ Toggle }: { Toggle: string }) => {
    const [action, setAction] = useState("");
    const Action = (value: string) => {
        setAction(value);
    }
    
    return (
        <div>
            <TopbarIndex Toggle={Toggle} />
            <h2>Quản lý sản phẩm</h2>
            {"" === action ? (
                <ListProduct Action={Action}/>
            ) 
            : "createProduct" === action ? (
                <CreateProduct Action={Action}/>
            ) 
            : "updateProduct" === action ? (
                <UpdateProduct Action={Action}/>
            )
            : "homeCategory" === action ? (<HomeCategory Action={Action}/>)
            : (<p>delete button clicked</p>)
        }

        </div>
    )
}
export default HomeProduct;