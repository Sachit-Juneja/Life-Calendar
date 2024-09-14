import React from "react";
import ReactDOM from "react-dom/client";
// Run below command if above othrows error
// npm i --save-dev @types/react-dom
import App from "./web-app";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
