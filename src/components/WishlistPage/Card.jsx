const Card = ({ data }) => {
  return (
    <div className="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex items-center w-full">
      <div className="w-2/12">
        <img
          src={data?.formats?.["image/jpeg"]}
          alt={data?.title}
          className="rounded-lg object-contain h-32 mx-auto"
        />
      </div>

      <div className="w-10/12 pl-4 flex items-end justify-between">
        <div className="w-10/12">
          {/* Title with truncation */}
          <h3 className="text-lg font-bold text-gray-800 truncate w-full">
            {data?.title}
          </h3>

          {/* Author with truncation */}
          <p className="text-gray-500 truncate w-full">
            by {data?.authors[0]?.name}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★5</span>
          </div>

          {/* Stock status */}
          <div className="mt-2">
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
        </div>

        {/* Button */}
        <button
          className={`mt-4 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
