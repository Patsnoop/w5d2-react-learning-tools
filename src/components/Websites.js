import React, { Component } from 'react';

class Websites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: [
        { id: 1, name: 'Reddit', url: 'https://www.reddit.com/r/all/'},
        { id: 2, name: 'ESPN', url: 'https://www.espn.com' },
        // Add more websites as needed
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Favorite Websites</h2>
        <ul>
          {this.state.websites.map(website => (
            <li key={website.id}>
              <a href={website.url}>{website.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Websites;