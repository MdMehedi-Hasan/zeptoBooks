const getListOfBooks = async () => {
    const response = await fetch('https://gutendex.com//books')
    return await response.json()
};

export default getListOfBooks;
