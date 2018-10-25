import React, {Component} from 'react'
import Book from './Book'
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
 
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.category}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                           <Book/>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf