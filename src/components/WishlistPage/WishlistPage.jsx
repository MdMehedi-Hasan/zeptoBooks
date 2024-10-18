import React, { useEffect, useState } from "react";
import { getWishlist } from "../../utils/Wishlist";
import Card from "./Card";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const WishlistPage = () => {
  const [wishlisted, setWishlisted] = useState([]);
  useEffect(() => {
    const getWishlisted = getWishlist();
    setWishlisted(getWishlisted);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto flex-grow my-20 space-y-8">
        {wishlisted.map((item) => (
          <Card key={item?.id} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
