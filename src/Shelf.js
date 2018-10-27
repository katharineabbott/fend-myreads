import React, {Component} from 'react'
import Book from './Book'
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.bookArray.map((book) => (
                                <Book key={book.id} title={book.title} author={book.authors.map((author) => {return author + " "})} url={book.imageLinks.thumbnail} shelf={book.shelf}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf