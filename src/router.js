import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Position from "./pages/Position";
import Books from "./pages/Books";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/:id", element: <App /> },
  { path: "/register", element: <Register /> },
  { path: "/position", element: <Position /> },
  { path: "/books", element: <Books /> },
]);

export default router;