import React, {Component} from 'react'

class Book extends Component {
    handleShelfChange = (event) => {
        let newValue = event.nativeEvent.target.value
        let oldValue = this.props.category
        console.log(oldValue)
        console.log(newValue)
        
        //update shelf of book object to new value
        //trigger shelves to update
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.url + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => {this.handleShelfChange(event)}}>
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