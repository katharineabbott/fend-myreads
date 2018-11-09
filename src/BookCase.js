import React, {Component} from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

class BookCase extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' bookArray={this.props.currentlyReading} handleShelfChange={this.props.handleShelfChange}/>
                    <Shelf title='Want to Read' bookArray={this.props.wantToRead}  handleShelfChange={this.props.handleShelfChange}/>
                    <Shelf title='Read' bookArray={this.props.read} handleShelfChange={this.props.handleShelfChange}/>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookCase