import React, {Component} from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BookCase extends Component {
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
    
    handleShelfChange = (id, shelf, book) => {
        if (book.shelf !== shelf) {
            this.setState({noShelf: []})
            this.setState({currentlyReadingShelf: []})
            this.setState({wantToReadShelf: []})
            this.setState({readShelf: []})
            book.shelf = shelf
            this.populateShelves()
        }
    }

    componentDidMount(){
    this.populateShelves()
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' bookArray={this.state.currentlyReadingShelf} populateShelves={this.populateShelves}/>
                    <Shelf title='Want to Read' bookArray={this.state.wantToReadShelf}  populateShelves={this.populateShelves}/>
                    <Shelf title='Read' bookArray={this.state.readShelf} populateShelves={this.handleShelfChange}/>
                </div>
                <div className="open-search">
                    <a>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookCase