import { FaHeart, FaRegHeart } from "react-icons/fa";

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
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs overflow-hidden">
      <div className="bg-gray-100 h-64 w-full flex items-center justify-center">
        <img src={image} alt="cover" className="h-full w-full object-contain" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 text-gray-600 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mb-2">{authorName}</p>
        <p className="text-sm text-gray-500 mb-4">{genre}</p>
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
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
