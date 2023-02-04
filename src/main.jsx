import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Layout from "./components/Layout";
import Login from "./features/auth/Login";
import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import Missing from "./components/Missing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Missing />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Public /> },
          { path: "login", element: <Login /> },
          {
            path: "dash",
            element: <DashLayout />,
            children: [
              { path: "", element: <Welcome /> },
              { path: "notes", element: <NotesList /> },
              { path: "users", element: <UsersList /> },
            ],
          },
        ],
      },
    ],
  },
]);

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route path="" element={<Welcome />} />
          <Route path="notes" element={<NotesList />} />
          <Route path="users" element={<UsersList />} />
        </Route>
      </Route>
    </Route>
  )
); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
