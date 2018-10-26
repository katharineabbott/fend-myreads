import React, {Component} from 'react'
import Shelf from './Shelf'

class BookCase extends Component {
    
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' bookArray={this.props.currentlyReading}/>
                    <Shelf title='Want to Read' bookArray={this.props.wantToRead}/>
                    <Shelf title='Read' bookArray={this.props.read}/>
                </div>
                <div className="open-search">
                    <a>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookCase