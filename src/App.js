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
    readShelf: []
  }

  populateShelves = () => {
    let noShelf = this.state.noShelf
    let currentlyReadingShelf = this.state.currentlyReadingShelf
    let wantToReadShelf = this.state.wantToReadShelf
    let readShelf = this.state.readShelf
    BooksAPI.getAll().then(result => {
      // this.setState({noShelf: []})
      // this.setState({currentlyReadingShelf: []})
      // this.setState({wantToReadShelf: []})
      // this.setState({readShelf: []})
      result.forEach(book => {
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
  
  handleShelfChange = (event) => {
    let newValue = event.nativeEvent.target.value
    let oldValue = this.state.bookCategory
    console.log(oldValue)
    console.log(newValue)
    if (newValue !== oldValue) {
        this.setState({bookCategory: newValue})
    }
    
    // this.populateShelves()
    //state needs to apply only to single book
    //update shelf of book object to new value
    //trigger shelves to update
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
          handleShelfChange={this.handleShelfChange}
        />
      </div>
    )
  }
}

export default BooksApp;