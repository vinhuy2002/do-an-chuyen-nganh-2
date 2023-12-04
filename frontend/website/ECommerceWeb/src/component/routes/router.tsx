import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

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
    }
]);
export default router;