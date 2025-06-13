import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Products from "./views/Products";
import NewProduct from "./views/Newproduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'products/new',
                element: <NewProduct />
            }
        ]
    }
])
