import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Position from "./pages/Position";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/register", element: <Register /> },
  { path: "/position", element: <Position /> },
]);

export default router;
