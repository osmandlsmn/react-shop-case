import Router from "@/router";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/localization/index";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={Router} />
);
