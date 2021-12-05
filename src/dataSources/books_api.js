const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class BookAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.book_api_url;
    }
    
    async createBook(book) {
        book = new Object(JSON.parse(JSON.stringify(book)));
        return await this.post('/book', book);
    }
    
    async bookByIdOwner(idOwner) {
        return await this.get(`/books/${idOwner}`);
    }

    async bookById(id) {
        return await this.get(`/book/${id}`);
    }

    async getAllBooks(getAllBooks) {
        return await this.get(`/books`, getAllBooks);
    }

    async getAllBooksTittle(tittle) {
        return await this.get(`/books/getAllBooksAvailable/${tittle}`);
    }

    async getAllBooksAuthor(author) {
        return await this.get(`/books/getAllBooksAvailable/${author}`);
    }

    async getAllBooksGenre(genre) {
        return await this.get(`/books/getAllBooksAvailable/${genre}`);
    }

    async getAllBooksEditorial(editorial) {
        return await this.get(`/books/getAllBooksAvailable/${editorial}`);
    }

    async getBooksAplicant(idAplicant) {
        return await this.get(`/books/allRequested/${idAplicant}`);
    }

    async deleteBook (bookId) {
        bookId = new Object(JSON.parse(JSON.stringify({ bookId})));
        return await this.delete(`/book/${id}`);
    }

    async updateBook(bookId) {
        bookId = new Object(JSON.parse(JSON.stringify({ bookId })));
        return await this.put(`/book/${id}`);
    }

}
module.exports = BookAPI;