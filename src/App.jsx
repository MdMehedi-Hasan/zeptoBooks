import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import WishlistPage from "./components/WishlistPage/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
]);
