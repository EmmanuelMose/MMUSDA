import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../../frontend/src/pages/LandingPage";
import { Toaster } from "sonner";
import "./App.css"; 
import Sermons from "../../frontend/src/components/sermons/Sermons";
import Error from "./components/Error/Error";
import PrayerRequest from "./components/prayerRequest/PrayerRequest";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />, 
    },
    {
      path: "/sermons",
      element: <Sermons />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/prayers",
      element: <PrayerRequest />,
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
