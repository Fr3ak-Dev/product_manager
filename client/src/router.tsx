import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Products from "./views/Products";
import NewProduct, { action as NewProductAction } from "./views/Newproduct";

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
                element: <NewProduct />,
                action: NewProductAction
            }
        ]
    }
])
