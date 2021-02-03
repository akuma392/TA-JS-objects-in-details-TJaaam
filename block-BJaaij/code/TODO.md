## An object-oriented book-list!

_[ ] Create a class BookList
_[ ] Create another class called Book

#### BookLists should have the following properties:

1. Number of books marked as read
2. Number of books marked not read yet
3. A reference to the next book to read (book object)
4. A reference to the current book being read (book object)
5. A reference to the last book read (book object)
6. An array of all the Books

#### Each Book should have several properties:

1. Title
2. Genre
3. Author
4. Read (true or false)
5. Read date, can be blank, otherwise needs to be a JS Date() object

Every Booklist should have a few methods:
-add(book)

- [ ] should add a book to the books list.

-finishCurrentBook()

- [ ] should mark the book that is currently being read as "read"
- [ ] Give it a read date of new Date(Date.now())
- [ ] Change the last book read to be the book that just got finished
- [ ] Change the current book to be the next book to be read
- [ ] Change the next book to be read property to be the first unread book you find in the list of books

#######################

## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class

```js
class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }

  markBookAsRead() {
    this.isRead = true;

    this.finishedDate = Date.now();
  }
}
```

```js
class BookList {
  constructor() {
    this.booklist = [];
    this.currentIndex = 0;
  }

  add(books = []) {
    this.booklist = this.booklist.concat(books);
    return this.booklist;
  }
  getCurrentBook() {
    return this.booklist[this.currentIndex];
  }
  getNextBook() {
    this.currentIndex = this.currentIndex + 1;
    return this.booklist[this.currentIndex];
  }
  getPrevBook() {
    this.currentIndex = this.currentIndex - 1;
    return this.booklist[this.currentIndex];
  }

  changeCurrentBook(index) {
    this.currentIndex = index;

    return this.booklist[this.currentIndex];
  }
}

let book1 = new Book("The Testaments", "fiction", "R P N Singh");

let book2 = new Book("Cheque book", "finance", "Vasdev Mohi");
let book3 = new Book("The Diary of Manu Gandhi", "real", "Tridip Suhrud");
let book4 = new Book("Darkness to light", "fiction", "Lamar Odom");
let book5 = new Book(
  "The New Delhi Conspiracy",
  "non fiction",
  "Meenakshi Lekhi"
);

let library = new BookList();

library.add([book1, book2, book3, book4, book5]);

console.log(library);

console.log(library.getCurrentBook());

console.log(library.getNextBook());

console.log(library.getPrevBook());

console.log(library.getNextBook());
console.log(library.getNextBook().markBookAsRead());

console.log(library.changeCurrentBook(4));
```
