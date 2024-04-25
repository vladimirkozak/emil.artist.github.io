import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductDetail from "./pages/Catalog/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound/NotFound";
import Contacts from "./pages/Contacts/Contacts";
import Calendar from "./pages/Calendar/Calendar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalog',
        element: <Catalog />
      },
      {
        path: '/catalog/:id',
        element: <ProductDetail />
      },
      {
        path: '/calendar',
        element: <Calendar />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ],
  },
]);

export default router;