import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BiHeart } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { CiShare2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { getListOfBooks, getSingleBook } from "../../api";
import { SiTarget } from "react-icons/si";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Card from "../common/Card";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../../utils/Wishlist";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const [wishlisted, setWishlisted] = useState([]);
  const { id } = useParams();
  const { data: singleBook, isLoading:heroLoading } = useQuery({
    queryKey: ["singleBook"],
    queryFn: async () => await getSingleBook(id),
  });
  const { data: listOfBooks, isLoading:productsLoading } = useQuery({
    queryKey: ["listOfBooks",1],
    queryFn: async () => await getListOfBooks(1),
  });

  const handleAddToWishlist = (book) => {
    addToWishlist(book);
    const updatedWishlist = getWishlist();
    setWishlisted(updatedWishlist);
  };

  const handleRemoveWishlist = (book) => {
    removeFromWishlist(book.id);
    const updatedWishlist = getWishlist();
    setWishlisted(updatedWishlist);
  };

  const isBookWishlisted = (book) => {
    return wishlisted.some((wishlistItem) => wishlistItem.id === book.id);
  };

  useEffect(() => {
    const wishlistBooks = getWishlist();
    setWishlisted(wishlistBooks);
  }, []);
  console.log({ listOfBooks });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl w-full flex-grow mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg mt-16 gap-x-16">
          {/* singleBook Image */}
          <div className="lg:w-3/12 w-full mb-6 lg:mb-0">
            <img
              src={singleBook?.formats["image/jpeg"]}
              alt={singleBook?.title}
              className="rounded-lg w-full"
            />
          </div>

          {/* singleBook Information */}
          <div className="lg:w-9/12 w-full lg:pl-8">
            {/* Title and Author */}
            <h1 className="text-3xl font-bold text-gray-800">
              {singleBook?.title}
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              by {singleBook?.authors[0]?.name} (
              {singleBook?.authors[0]?.birth_year} -{" "}
              {singleBook?.authors[0]?.death_year})
            </p>

            {/* Subjects */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">Subjects:</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {singleBook?.subjects?.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>

            {/* Download Count */}
            <div className="mt-6">
              <span className="text-gray-700 font-bold">Download Count:</span>{" "}
              <span className="text-gray-500">
                {singleBook?.download_count?.toLocaleString()}
              </span>
            </div>

            {/* Download Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.gutenberg.org/ebooks/84.txt.utf-8"
                className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read as Text
              </a>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-36">Popular Collections</h2>
          <section className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-5 lg:gap-10 lg:px-10 xl:px-0 mt-10 mb-36">
            {listOfBooks?.results?.map((book) => (
              <Card
                id={book?.id}
                key={book?.id}
                title={book?.title}
                image={book?.formats?.["image/jpeg"]}
                authorName={book?.authors[0]?.name}
                addToWishlist={() => handleAddToWishlist(book)}
                removeWishlist={() => handleRemoveWishlist(book)}
                isWishlisted={isBookWishlisted(book)}
              />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
