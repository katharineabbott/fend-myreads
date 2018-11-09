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
                                <Book key={book.id} title={book.title} shelf={book.shelf}  handleShelfChange={this.props.handleShelfChange} id={book.id} book={book}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf