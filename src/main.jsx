import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";  
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import "./index.css";

// 1. Crear un Layout con ScrollRestoration
const RootLayout = ({ children }) => {
  return (
    <>
      {children}
      <ScrollRestoration /> {/* Esto manejará el scroll automáticamente */}
    </>
  );
};

// 2. Configurar las rutas envolviendo cada página con el Layout
const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <RootLayout>
        <Inicio />
      </RootLayout>
    ),
  },
  {
    path: "/servicios",
    element: (
      <RootLayout>
        <Servicios />
      </RootLayout>
    ),
  },
  {
    path: "/nosotros",
    element: (
      <RootLayout>
        <Nosotros />
      </RootLayout>
    ),
  },
  {
    path: "/contacto",
    element: (
      <RootLayout>
        <Contacto />
      </RootLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);