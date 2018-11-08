import React, {Component} from 'react'
import Book from './Book'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class Search extends Component {    
    render() {
        
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={(event) => this.props.updateQuery(event.target.value)} />
                        

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                        <ol className="books-grid">
                            {this.props.matchingBooks.map((book) => (
                                <Book key={book.id} title={book.title}  url={book.imageLinks.thumbnail} shelf={book.shelf}  handleShelfChange={this.props.handleShelfChange} id={book.id} book={book}/>
                            ))}
                        </ol>
            </div>
        )
    }
}

export default Search