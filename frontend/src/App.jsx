import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../../frontend/src/pages/LandingPage";
import { Toaster } from "sonner";
import "./App.css"; 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />, 
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            error: "error-toast",
            success: "success-toast",
            info: "info-toast",
          },
        }}
      />
    </>
  );
}

export default App;
