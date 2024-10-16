export const getListOfBooks = async (currentPage) => {
  const response = await fetch(`https://gutendex.com/books/?page=${currentPage}`);
  return await response.json();
};
export const getSingleBook = async (id) => {
  const response = await fetch(`https://gutendex.com/books/${id}`);
  return await response.json();
};
export const getFilteredBooks = async ( item ) => {
  const response = await fetch(`https://gutendex.com/books?search=${item}`);
  return await response.json();
};
