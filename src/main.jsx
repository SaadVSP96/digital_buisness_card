import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css"; // If you have a CSS file, otherwise remove this line

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
