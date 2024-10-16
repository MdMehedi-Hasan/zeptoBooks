import { useQuery } from "@tanstack/react-query";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../../utils/Wishlist";
import { getListOfBooks } from "../../api";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Card from "../common/Card";
import CardSkeleton from "../common/skeleton/CardSkeleton";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlisted, setWishlisted] = useState([]);

  const { data: listOfBooks, isLoading } = useQuery({
    queryKey: ["listOfBooks", currentPage],
    queryFn: async () => await getListOfBooks(currentPage),
  });

  useEffect(() => {
    const wishlistBooks = getWishlist();
    setWishlisted(wishlistBooks);
  }, []);

  const handleAddToWishlist = (book) => {
    addToWishlist(book);
    const updatedWishlist = getWishlist();
    setWishlisted(updatedWishlist);
  };

  const handleRemoveWishlist = (book) => {
    console.log({ book }, "called");
    removeFromWishlist(book.id);
    const updatedWishlist = getWishlist();
    setWishlisted(updatedWishlist);
  };

  const isBookWishlisted = (book) => {
    return wishlisted.some((wishlistItem) => wishlistItem.id === book.id);
  };
  return (
    <div>
      <input
        type="text"
        className="border border-black rounded-full py-2 px-4 mt-5"
        placeholder="_search"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 mt-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <section className="grid grid-cols-4 gap-10 px-10 mt-10">
          {listOfBooks?.results?.map((book) => (
            <Card
              id={book?.id}
              key={book?.id}
              title={book?.title}
              image={book?.formats?.["image/jpeg"]}
              authorName={book?.authors?.name}
              addToWishlist={() => handleAddToWishlist(book)}
              removeWishlist={() => handleRemoveWishlist(book)}
              isWishlisted={isBookWishlisted(book)}
            />
          ))}
        </section>
      )}
      <Pagination
        itemsPerPage={listOfBooks?.results?.length}
        totalDataCount={listOfBooks?.count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
