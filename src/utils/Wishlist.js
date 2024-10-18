export const addToWishlist = (book) => {
  // existing wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // avoiding duplicates
  const isBookInWishlist = wishlist.some((item) => item.id === book.id);

  if (!isBookInWishlist) {
    wishlist.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Book added to wishlist");
  } else {
    alert("Book is already in the wishlist");
  }
};

export const getWishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist;
};

export const removeFromWishlist = (bookId) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter((item) => item.id !== bookId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Book removed from wishlist");
};
