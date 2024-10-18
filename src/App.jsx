import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import DetailsPage from "./components/Detailspage/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <DetailsPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
]);
