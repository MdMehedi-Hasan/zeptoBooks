import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({
  title,
  image,
  authorName,
  genre,
  id,
  addToWishlist,
  removeWishlist,
  isWishlisted,
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs overflow-hidden">
      <div className="bg-gray-100 h-64 w-full flex items-center justify-center p-4">
        <img src={image} alt="cover" className="h-full w-full object-contain" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 text-gray-600 truncate w-full">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mb-2">{authorName}</p>
        <p className="text-sm text-gray-500">{genre}</p>
        <p className="text-sm text-gray-500 mb-4">{id}</p>
        <div className="flex items-center justify-between">
          {isWishlisted ? (
            <button
              onClick={removeWishlist}
              className="text-red-500 hover:text-red-600"
            >
              <FaHeart size={24} />
            </button>
          ) : (
            <button
              onClick={addToWishlist}
              className="text-red-500 hover:text-red-600"
            >
              <FaRegHeart size={24} />
            </button>
          )}
          <Link
            to={`/product/${id}`}
            className="border border-gray-300 shadow px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transform duration-300"
          >
            <span className="hidden sm:block">See Details</span>
            <span className="block sm:hidden"><BsArrowUpRightSquare /></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
