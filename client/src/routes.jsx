import React from "react";
import Cart from "./app/components/pages/cart/cart";
import MainPage from "./app/components/pages/mainPage";
import Ordering from "./app/components/pages/ordering/ordering";
import ProductPage from "./app/components/pages/productPage";
import Profile from "./app/components/pages/profile/profile";
import ProtectedRoute from "./app/components/ProtectedRoute";
// import AuthLayout from "./app/layouts/authLayout/authLayout";

const routes = [
    {
        path: "/",
        element: <MainPage />
    },
    // {
    //     path: "auth",
    //     element: <AuthLayout />
    // },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
    {
        path: "pizza",
        element: <ProductPage category="pizza" />
    },
    {
        path: "rolls",
        element: <ProductPage category="rolls" />
    },
    {
        path: "ordering",
        element: <Ordering />
    }
];
export default routes;
