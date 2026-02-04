const library = {
  name: "City Library",
  books: [],

  addBook(title, author, isbn) {
    const newBook = { title, author, isbn };
    this.books.push(newBook);
    console.log(`Added: "${title}" to ${this.name}`);    
  },

  findBookByTitle(title) {
    const found = this.books.find(book => book.title === title);
    return found || null;
  },

  listAllBooks() {
    console.log(`--- Books in ${this.name} ---`);
    this.books.forEach(book => console.log(`- ${book.title}`));
  }
};

const universityLibrary = Object.create(library);
universityLibrary.name = 'University Library'; 
universityLibrary.books = []; 
universityLibrary.courses = [];

universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
this.courses.push(courseName); 
this.addBook(title, author, isbn);
console.log(`Course "${courseName}" now uses this book.`); 
};

library.addBook('The Great Gatsby', 'F. Scott Fitzgerald', '12345'); 
library.addBook('1984', 'George Orwell', '67890'); 

universityLibrary.addCourseBook('CS101', 'Eloquent JavaScript', 'Marijn Haverbeke', '11223'); 
universityLibrary.addBook('Clean Code', 'Robert C. Martin', '44556');  

library.listAllBooks(); 
universityLibrary.listAllBooks();

const search = universityLibrary.findBookByTitle('Eloquent JavaScript'); 
console.log('Search Result:', search);
