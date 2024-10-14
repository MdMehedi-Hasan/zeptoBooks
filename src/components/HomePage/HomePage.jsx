import { useQuery } from "@tanstack/react-query";
import getListOfBooks from "../../api";
import Card from "../common/Card";

const HomePage = () => {
  const { data: listOfBooks } = useQuery({
    queryKey: ["listOfBooks"],
    queryFn: async () => await getListOfBooks(),
  });
  console.log(listOfBooks);
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
