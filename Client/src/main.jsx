import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes.jsx";

const rout = createBrowserRouter(PageRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={rout}></RouterProvider>
);
