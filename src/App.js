import React from 'react'
import BookCase from './BookCase'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    noShelf: [],
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
    screen: "search",
    query: "",
    matchingBooks: []
  }

  populateShelves = () => {
  let noShelf = this.state.noShelf
  let currentlyReadingShelf = this.state.currentlyReadingShelf
  let wantToReadShelf = this.state.wantToReadShelf
  let readShelf = this.state.readShelf
  BooksAPI.getAll().then(result => {
      result.forEach(book => {
        this.setState({bookCategory: book.shelf})
        if (book.shelf === 'currentlyReading') {
            // this.setState({bookCategory: book.shelf})
            currentlyReadingShelf.push(book)
        } else if (book.shelf === 'wantToRead') {
            // this.setState({bookCategory: book.shelf})
            wantToReadShelf.push(book)
        } else if (book.shelf === 'read') {
            // this.setState({bookCategory: book.shelf})
            readShelf.push(book)
        } else {
            // this.setState({bookCategory: book.shelf})
            noShelf.push(book)
        }
      })
      this.setState({noShelf: noShelf});
      this.setState({currentlyReadingShelf: currentlyReadingShelf});
      this.setState({wantToReadShelf: wantToReadShelf});
      this.setState({readShelf: readShelf});
    })
  }

  handleShelfChange = (shelf, book) => {
      if (book.shelf !== shelf) {
          book.shelf = shelf
          this.setState({noShelf: []})
          this.setState({currentlyReadingShelf: []})
          this.setState({wantToReadShelf: []})
          this.setState({readShelf: []})
          this.populateShelves()
      } else {
          alert("This book is already on that shelf!")
      }
  }

  updateQuery = (query) => {
    let matchingBooks = this.state.matchingBooks
    this.setState({query: query.trim()})
    BooksAPI.search(query).then((response) => {
        if (this.state.query.length >= 1 && response.length > 0) {
            response.forEach(book => {
                matchingBooks.push(book)
            })
        } else if (this.state.query.length >= 1) {
            console.log("No books found")
        } else {
          console.log("No search term")
        }
    })
    this.setState({matchingBooks: matchingBooks});
    console.log(query)
}

  componentDidMount(){
    this.populateShelves()
  }
  render() {
    return (
      <div className="app">
        {this.state.screen === "search" && (
            <Search updateQuery={this.updateQuery} query={this.state.query} matchingBooks={this.state.matchingBooks} currentlyReading={this.state.currentlyReadingShelf} wantToRead={this.state.wantToReadShelf} read={this.state.readShelf} handleShelfChange={this.handleShelfChange}/>
         )}
        {this.state.screen === "bookshelf" && (
          <BookCase currentlyReading={this.state.currentlyReadingShelf} wantToRead={this.state.wantToReadShelf} read={this.state.readShelf} handleShelfChange={this.handleShelfChange}/>
        )}
      </div>
    )
  }
}

export default BooksApp;