import React, { useEffect, useState } from "react";
import { getWishlist } from "../../utils/Wishlist";
import Card from "./Card";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlisted, setWishlisted] = useState([]);
  useEffect(() => {
    const getWishlisted = getWishlist();
    setWishlisted(getWishlisted);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto flex-grow my-20 flex flex-col gap-5 px-5 lg:px-8">
        {wishlisted.map((item) => (
          <Link to={`/product/${item?.id}`} key={item?.id}><Card  data={item} /></Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
