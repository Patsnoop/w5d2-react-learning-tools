import React, { Component } from 'react';

class WithDataFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          data: null,
          isLoading: false,
          error: error.message
        });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Data from API:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default WithDataFetching;