import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "../App";

const Router = () => {
  const routes = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: (
            <>
              <h1>every ok</h1>
              <h1>every ok</h1>
            </>
          ),
        },
        {
          path: "/main",
          element: <h1>Main</h1>,
        },
        {
          path: "/store",
          element: <h1>Store</h1>,
        },
        {
          path: "/education",
          element: <h1>Education</h1>,
        },
        {
          path: "/chats",
          element: <h1>Chats</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Router;
