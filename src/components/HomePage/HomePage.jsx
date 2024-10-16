import { useQuery } from "@tanstack/react-query";
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
import { LuSearch } from "react-icons/lu";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlisted, setWishlisted] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const {
    data: listOfBooks,
    isLoading
  } = useQuery({
    queryKey: isSearch
      ? ["searchedBooks", isSearch]
      : selectedTopic
      ? ["filteredBooks", selectedTopic,currentPage]
      : ["listOfBooks", currentPage],
    queryFn: async () =>
      isSearch
        ? await getSearchedBooks(searchItem)
        : selectedTopic
        ? await getFilteredBooks(selectedTopic,currentPage)
        : await getListOfBooks(currentPage),
  });

  useEffect(() => {
    if (selectedTopic || currentPage > 1) {
      setIsSearch(false);
    }
  }, [selectedTopic,currentPage]);

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
  return (
    <div>
      <div className="flex items-center justify-center mt-5 relative w-full max-w-md">
        <input
          type="text"
          className="border border-gray-300 rounded-full py-2 px-4 w-full pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
          placeholder="Search..."
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <span className="absolute left-4 text-gray-400">
          <LuSearch
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsSearch(true)}
          />
        </span>
      </div>

      <div className="flex justify-end">
        <Filter filterList={filterList} selectedOption={setSelectedTopic} />
      </div>
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
    </div>
  );
};

export default HomePage;
