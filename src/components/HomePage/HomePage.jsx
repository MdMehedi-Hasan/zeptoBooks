import { useQueries, useQuery } from "@tanstack/react-query";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../../utils/Wishlist";
import { getFilteredBooks, getListOfBooks, getSearchedBooks } from "../../api";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Card from "../common/Card";
import CardSkeleton from "../common/skeleton/CardSkeleton";
import Filter from "../common/Filter";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import HeroSection from "./HeroSection";
import Focus from "./Focus";
import ReviewsSection from "./Reviews";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlisted, setWishlisted] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const { data: listOfBooks, isLoading } = useQuery({
    queryKey: isSearch
      ? ["searchedBooks", isSearch]
      : selectedTopic
      ? ["filteredBooks", selectedTopic, currentPage]
      : ["listOfBooks", currentPage],
    queryFn: async () =>
      isSearch
        ? await getSearchedBooks(searchItem)
        : selectedTopic
        ? await getFilteredBooks(selectedTopic, currentPage)
        : await getListOfBooks(currentPage),
  });

  useEffect(() => {
    if (selectedTopic || currentPage > 1) {
      setIsSearch(false);
    }
  }, [selectedTopic, currentPage]);

  useEffect(() => {
    const wishlistBooks = getWishlist();
    setWishlisted(wishlistBooks);
  }, []);

  useEffect(() => {
    const allSubjects = listOfBooks?.results
      ?.map((book) => book.subjects)
      .flat();
    const uniqueSubjects = [...new Set(allSubjects)];
    setFilterList(uniqueSubjects);
  }, [listOfBooks]);

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
  console.log({ listOfBooks });
  return (
    <div className="bg-gray-100">
      <Navbar setIsSearch={setIsSearch} setSearchItem={setSearchItem} />
      <HeroSection
        data={listOfBooks?.results?.slice(2, 5)}
        isLoading={isLoading}
      />
      <div className="my-36">
        <Focus />
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold">All Collections</h2>
        <Filter filterList={filterList} selectedOption={setSelectedTopic} />
      </div>
      {isLoading ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 my-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <section className="max-w-7xl mx-auto grid grid-cols-5 gap-10 px-10 xl:px-0 my-10">
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
      )}
      <Pagination
        itemsPerPage={listOfBooks?.results?.length}
        totalDataCount={listOfBooks?.count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="my-36">
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
