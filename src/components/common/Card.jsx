const Card = ({ title, author, image, authorName, genre, id }) => {
  return (
    <div className="bg-green-100 border rounded-lg shadow-lg">
      <div className="bg-white h-56 overflow-hidden object-contain flex items-center justify-center">
        <img src={image} alt="cover" className="object-cover" />
      </div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{genre}</p>
      <div>
        {/* Love icon */}
        <button className="bg-black text-white px-5 py-2">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
