import Login from "../pages/Auth/Login/Login";
import { IRoute } from "../types/route.types";

const authRoutes: IRoute[] = [
  {
    path: "/login",
    element: <Login/>
  }
]

export default authRoutes