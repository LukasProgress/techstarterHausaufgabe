function getTheTitles(books) {
    const titles = books.map(book => book.title);
    return titles;
  }
  
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];
  
  const bookTitles = getTheTitles(books);
  console.log(bookTitles); // Ausgabe: ['Book', 'Book2']  