import React from 'react'
import BookCase from './BookCase'
// import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    noShelf: [],
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
    bookCategory: "none"
  }

  populateShelves = () => {
    let noShelf = this.state.noShelf
    let currentlyReadingShelf = this.state.currentlyReadingShelf
    let wantToReadShelf = this.state.wantToReadShelf
    let readShelf = this.state.readShelf
    BooksAPI.getAll().then(result => {
      result.forEach(book => {
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
  
  componentDidMount(){
    this.populateShelves()
  }

  render() {
    return (
      <div className="app">
        <BookCase 
          none={this.state.noShelf} 
          currentlyReading={this.state.currentlyReadingShelf} 
          wantToRead={this.state.wantToReadShelf} 
          read={this.state.readShelf} 
          value={this.state.bookCategory}
        />
      </div>
    )
  }
}

export default BooksApp;
