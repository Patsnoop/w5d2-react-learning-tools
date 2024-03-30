import React, { Component } from 'react';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: '1984', author: 'George Orwell' },
        { id: 2, title: 'Lord of the Rings', author: 'JRR Tolkien' },
        // Add more books as needed
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Favorite Books</h2>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;
