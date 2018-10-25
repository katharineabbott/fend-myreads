import React from 'react'
import BookCase from './BookCase'
// import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    noShelf: [],
    currentlyReadingShelf: {title: 'To Kill A Mockingbird'},
    wantToReadShelf: [],
    readShelf: [],
  }

  componentDidMount(){
    console.log(BooksAPI.getAll().then(function(result){console.log(result)}))
  }

  render() {
    return (
      <div className="app">
        <BookCase />
      </div>
    )
  }
}

export default BooksApp;
