import React from 'react';

const FollowersCard = props => {
  console.log("Followers props: ", props)
    if(props.follower.length > 0) {
      return (
        <div>
          <h3>Number of Followers: {props.follower.length}</h3>
          {props.follower.map(following => {
            return (
            <div>
              <img src={following.follower.photo} alt="user avatar" />
              <h3>Name: {following.follower.name}</h3>
            </div>
          )})}
        </div>
      )
    } else {
      return (
        <div>
          <h3>Number of Followers: {props.follower.length}</h3>
        </div>
      );
    }

}

export default FollowersCard;