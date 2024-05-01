import { createBrowserRouter } from "react-router-dom";
import Layout from "@layout/Layout";
import Home from "@pages/Home/Home";
import Catalog from "@pages/Catalog/Catalog";
import ProductDetail from "@pages/Catalog/ProductDetail/ProductDetail";
import NotFound from "@pages/NotFound/NotFound";
import Contacts from "@pages/Contacts/Contacts";
import Calendar from "@pages/Calendar/Calendar";
import About from "@pages/About/About";
import FAQ from "@pages/FAQ/FAQ";
import Cart from "@pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:id",
        element: <ProductDetail />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
