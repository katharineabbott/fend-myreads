import React from 'react'
import { Route } from 'react-router-dom'
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
    query: "",
    matchingBooks: []
  }

  // checks the "shelf" attribute of each book currently on a shelf and adds that 
  // book to the corresponding array. the arrays then update the state so each shelf
  // has an array of books that are on it
  populateShelves = () => {
    let noShelf = this.state.noShelf
    let currentlyReadingShelf = this.state.currentlyReadingShelf
    let wantToReadShelf = this.state.wantToReadShelf
    let readShelf = this.state.readShelf
    BooksAPI.getAll().then(result => {
      result.forEach(book => {
        this.setState({bookCategory: book.shelf})
        if (book.shelf === 'currentlyReading') {
          currentlyReadingShelf.push(book)
        } else if (book.shelf === 'wantToRead') {
          wantToReadShelf.push(book)
        } else if (book.shelf === 'read') {
          readShelf.push(book)
        } else {
          noShelf.push(book)
        }
      })
      this.setState({noShelf: noShelf});
      this.setState({currentlyReadingShelf: currentlyReadingShelf});
      this.setState({wantToReadShelf: wantToReadShelf});
      this.setState({readShelf: readShelf});
    })
  }

  // when a book is moved to a new shelf, this checks if it already exists on that
  // shelf (which prompts an alert) and if not, empties all shelf state arrays and 
  // calls populateShelves to re-render the shelves with the new contents
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

  // takes in a query and searches BooksAPI for matches. if matches are found, 
  // they are added to the matchingBooks array and the state is updated with the
  // matching books. 
  updateQuery = (query) => {
    let matchingBooks = []
    this.setState({query: query})
    if (query.length > 0){
      BooksAPI.search(query).then((response) => {
        if (this.state.query.length >= 1 && response.length > 0) {
          response.forEach(book => {
            matchingBooks.push(book)
          })
        } else {
          alert("No books found")
          this.setState({matchingBooks: []})
        }
        this.setState({matchingBooks: matchingBooks});
      }
    )} else {
      this.setState({matchingBooks: []})
    }
  }

  componentDidMount(){
    this.populateShelves()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <Search
            updateQuery={this.updateQuery}
            query={this.state.query}
            matchingBooks={this.state.matchingBooks}
          />
        )}/>
        <Route exact path='/' render={() => (
          <BookCase
            currentlyReading={this.state.currentlyReadingShelf}
            wantToRead={this.state.wantToReadShelf}
            read={this.state.readShelf}
            handleShelfChange={this.handleShelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;