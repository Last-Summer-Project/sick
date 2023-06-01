import Sick from "./pages/Sick";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
        path: "/",
        element: <Sick />,
    },
    {
        path: "/sick",
        element: <Sick />
    }
])