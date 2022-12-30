import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Register from "../Components/Auth/Register";
import Index from "../Components/Home/Index/Index";
import Media from "../Components/Media/Media";
import ProfileIndex from "../Components/UserProfile/Index/ProfileIndex";

import Main from "../Main/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Main></Main></PrivateRoute>,
    children: [
      {
        path: '/',
        element: <Index></Index>
      },
      {
        path: '/profile',
        element: <ProfileIndex></ProfileIndex>
      },

      {
        path: '/media',
        element: <Media></Media>
      }

    ]

  },
  {
    path: '/login',
    element: <Register></Register>
  },
]);
export default router;