import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Router/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="lg:max-w-[1400px] mx-auto">
    <React.StrictMode>
      <RouterProvider router={Route}></RouterProvider>
    </React.StrictMode>
  </div>
);
