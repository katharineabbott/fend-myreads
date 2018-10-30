import React from 'react'
import BookCase from './BookCase'
// import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <BookCase />
      </div>
    )
  }
}

export default BooksApp;