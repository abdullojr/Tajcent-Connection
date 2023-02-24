import React from "react";
import {
  RouterProvider,
  createHashRouter,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ProfilePage from "../Page/Profile";
import MainPage from "../Page/Main";
import StorePage from "../Page/store";
import EducationPage from "../Page/education";
import ChatPage from "../Page/Chats";
import Login from "../Page/Login";
import Auth from "../Page/Login/Auth";

const Router = () => {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <ProfilePage />,
        },
        {
          path: "/main",
          element: <MainPage />,
        },
        {
          path: "/store",
          element: <StorePage />,
        },
        {
          path: "/education",
          element: <EducationPage />,
        },
        {
          path: "/chats",
          element: <ChatPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Router;
