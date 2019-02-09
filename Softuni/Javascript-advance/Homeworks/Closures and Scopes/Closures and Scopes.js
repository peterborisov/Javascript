function main() {
    var library = (function () {
        var books = [];
        var categories = [];
        function listBooks() {
            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;
            books.push(book);
            return book;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    } ());
    return library;
}
var input=[];
main(input);
