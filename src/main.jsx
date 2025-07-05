import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import  Contacto  from "./pages/Contacto"; 
import NotFound from "./pages/NotFound";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
