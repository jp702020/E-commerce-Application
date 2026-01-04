import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("../App"));
const ProductList = lazy(() => import("../components/ProductList"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));
const Cart = lazy(() => import("../components/Cart"));
const Checkout = lazy(() => import("../components/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));

const Loader = () => <p>Loading...</p>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><App /></Suspense>,
    errorElement: <Suspense fallback={<Loader />}><NotFound /></Suspense>,
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><ProductList /></Suspense> },
      { path: "product/:id", element: <Suspense fallback={<Loader />}><ProductDetail /></Suspense> },
      { path: "cart", element: <Suspense fallback={<Loader />}><Cart /></Suspense> },
      { path: "checkout", element: <Suspense fallback={<Loader />}><Checkout /></Suspense> }
    ]
  }
]);
