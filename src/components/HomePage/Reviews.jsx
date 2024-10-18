const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    comment:
      "Great product! The quality exceeded my expectations, and the packaging was neat. I would highly recommend it to anyone looking for a reliable option.",
    avatar:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-summer-pink-clothes_158538-889.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    comment:
      "Amazing quality and fast shipping. The product arrived in perfect condition and works exactly as described. I'll definitely be purchasing from here again.",
    avatar:
      "https://img.freepik.com/free-photo/sexy-attractive-male-confident-hipster-handsome-stylish-bearded-man-brown_285396-4630.jpg?semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Sam Johnson",
    rating: 4,
    comment:
      "Good value for the price. The customer service was responsive, and I'm satisfied with the overall experience. Will buy again when needed.",
    avatar:
      "https://img.freepik.com/free-photo/handsome-blond-young-man-posing_158595-2481.jpg?semt=ais_hybrid",
  },
];

const ReviewsSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-10">Happy Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start"
          >
            {/* Avatar */}
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="w-12 h-12 rounded-full mr-4 object-cover object-center"
              />
              <div>
                <h4 className="text-lg font-bold">{review.name}</h4>
                <p className="text-yellow-500">★ {review.rating}</p>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
