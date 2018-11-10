import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.props.query}
                onChange={(event) => this.props.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        <ol className="books-grid">
          {this.props.matchingBooks.map((book) => (
            <Book
              key={book.id} 
              title={book.title} 
              handleShelfChange={this.props.handleShelfChange} 
              book={book}
            />
          ))}
        </ol>
      </div>
    )
  }
}

export default Search