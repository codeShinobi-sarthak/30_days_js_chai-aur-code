//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1 , 2,  4
console.log("--Activity-[1, 2, 3, 4] --");
// task-[1, 2 ,3 ,4]
const book = {
  title: "Atomic habit",
  author: "james clerk",
  year: 2000,
  bookDetail() {
    return `Title of the book is ${book.title} and author ${book.author}`;
  },
  updateYear(year) {
    this.year = year;
    console.log(book);
  },
  //   task-7
  useThis() {
    return `${this.title} and ${this.year}`;
  },
};

console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.bookDetail());
book.updateYear(2003);

//* Activity-3
console.log("--Activity-3 --");
// task-[5, 6]
const library = {
  name: "library_obj",
  books: [
    {
      title: "mindset",
      author: "lazy to search",
      year: 2000,
    },
    {
      title: "word power made easy",
      author: "Norman Lewis",
      year: 2000,
    },
    {
      title: "ikigai",
      author: "lazy to search",
      year: 2000,
    },
  ],
};

console.log(library);
console.log(library.name);
console.log(library.books);

//* Activity-4
console.log("--Activity-4 --");
console.log(book.useThis());

//* Activity-5
console.log("--Activity-5--");
// task-8
for (const prop in book) {
  console.log(prop);
  console.log(book[prop]);
}

// task-9
console.log(Object.keys(book));
console.log(Object.values(book));
