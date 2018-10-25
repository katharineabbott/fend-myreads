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
                    <Shelf category='Currently Reading'/>
                    <Shelf category='Want to Read'/>
                    <Shelf category='Read'/>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookCase
