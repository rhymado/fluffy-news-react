import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Position from "./pages/Position";
import Books from "./pages/Books";
import Counter from "./pages/Counter";
import Hooks from "./pages/Hooks";

import PrivateElement from "./components/PrivateElement";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/:id", element: <App /> },
  { path: "/register", element: <Register /> },
  {
    path: "/position",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <Position />
      </PrivateElement>
    ),
  },
  { path: "/books", element: <Books /> },
  { path: "/counter", element: <Counter /> },
  { path: "/hooks/:id/:status", element: <Hooks /> },
]);

export default router;
