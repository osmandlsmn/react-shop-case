import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts";
import Home from "@/pages/Home";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
