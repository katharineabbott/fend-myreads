import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  state = {
    author: "",
    thumbnailURL: "",
    shelf: ""
  }

  checkForAuthor = (book) => {
    if (book.hasOwnProperty('authors')) {
      this.setState({author: book.authors.join(', ')})
    } else {
      this.setState({author: "No author"})
    }
  }

  checkForThumbnail = (book) => {
    if(book.hasOwnProperty('imageLinks')) {
      this.setState({thumbnailURL: book.imageLinks.thumbnail})
    } else {
      this.setState({thumbnailURL: 'http://www.laminex.com.au/uploads/products/silver_grey.jpg'})
    }
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {this.props.handleShelfChange(shelf, book)})
  }

  checkForShelf = (book) => {
    if(book.hasOwnProperty('shelf')) {
      this.setState({shelf: book.shelf})
    } else {
      this.setState({shelf: "none"})
    }
  }

  componentDidMount() {
    this.checkForAuthor(this.props.book)
    this.checkForThumbnail(this.props.book)
    this.checkForShelf(this.props.book)
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.state.thumbnailURL + ')' }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={(event) => {this.shelfChange(this.props.book, event.nativeEvent.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.state.author}</div>
        </div>
      </li>
    )
  }
}

export default Book