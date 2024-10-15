import { useQuery } from "@tanstack/react-query";
import { getListOfBooks } from "../../api";
import Card from "../common/Card";
import { useState } from "react";
import Pagination from "../common/Pagination";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  console.log({currentPage})

  const { data: listOfBooks, isLoading } = useQuery({
    queryKey: ["listOfBooks",currentPage],
    queryFn: async () => await getListOfBooks(currentPage),
  });
  console.log(listOfBooks);
  return (
    <div>
      <input
        type="text"
        className="border border-black rounded-full py-2 px-4"
        placeholder="_search"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <section className="grid grid-cols-4 gap-10 px-10">
          {listOfBooks?.results?.map((book) => (
            <Card
              id={book?.id}
              key={book?.id}
              title={book?.title}
              image={book?.formats?.["image/jpeg"]}
              authorName={book?.authors?.name}
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
