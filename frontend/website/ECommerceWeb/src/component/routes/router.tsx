import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Dashboard from "../../pages/dashboard/Dashboard";
import ProductDetail from "../body/productDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/detail/:id",
        element: <ProductDetail/>
    }
]);
export default router;