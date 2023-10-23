import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Router/Route.jsx";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="lg:max-w-[1400px] mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
