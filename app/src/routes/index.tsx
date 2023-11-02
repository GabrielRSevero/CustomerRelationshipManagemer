import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Hello</>,
  },
  ...authRoutes
])

export default router