import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Basket from "@/pages/Basket";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);
