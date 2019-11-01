import React from 'react';

const UserCard = props => {
  return (
    <div>
      <img src={props.user.avatar_url} alt="Tiffany Simionescu" />
      <h1>{props.user.name}</h1>
      <h3>Location: {props.user.location}</h3>
      <h3>Github Page:
      <a href={props.user.html_url}>tiffany-simionescu</a>
      </h3>
      <h3>Bio: 
      <span>{props.user.bio}</span>
      </h3>
    </div>
  )
};

export default UserCard;