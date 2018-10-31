import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        bookCategory: "none"
    }

    shelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then((response) => {this.props.handleShelfChange(shelf, book)})
    }
    
    render() {

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.url + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue="move" onChange={(event) => {this.shelfChange(this.props.book, event.nativeEvent.target.value)}}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                </div>
            </li>
        )
    }
}

export default Book

//onChange goes in <select>
//event.nativeEvent.target.value to access value of drop down item selected