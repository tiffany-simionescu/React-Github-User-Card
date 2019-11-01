import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: "",
      followersInfo: ""
    };
  }

  componentDidMount() {
    this.getUserInfo();
    this.getFollowersInfo();
  }

  getUserInfo = () => {
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

  getFollowersInfo = () => {
    axios
      .get('https://api.github.com/users/tiffany-simionescu/followers')
      .then(res => {
        console.log(res.data);
        this.setState({
          followersInfo: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.userInfo.login}</h1>
        <UserCard user={this.state.userInfo}/>
        <FollowersCard follower={this.state.followersInfo} />
      </div>
    )
  }
}

export default App;
