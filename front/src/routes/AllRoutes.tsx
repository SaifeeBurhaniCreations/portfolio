import { Navigate, useRoutes } from "react-router-dom";
import RootModule from "../modules/RootModule";
import rootRoutes from "./root/root";

const AllRoutes = () => {

    const userRoutes = useRoutes([
        {
            path: "/",
            element: <RootModule />,
            children: rootRoutes,
        },
        {
            path: "*",
            element: <Navigate to="/" replace />,
        },
    ]);

    return userRoutes;
};

export default AllRoutes;