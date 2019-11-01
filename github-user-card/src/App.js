import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: ""
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/tiffany-simionescu')
      .then(res => {
        console.log(res.data);
        this.setState({
          userInfo: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.userInfo.login}</h1>
      </div>
    )
  }
}

export default App;
