const Filter = ({filterList,selectedOption}) => {
  return (
    <div>
      <h5 className="text-gray-500 font-semibold text-sm">Filter books</h5>
      <select name="" id="" className="w-44 border border-gray-400 rounded p-2 " onChange={(e)=>selectedOption(e.target.value)}>
        <option value="" disabled selected>
          Select
        </option>
        {filterList?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
