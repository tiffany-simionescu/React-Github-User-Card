import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: linear-gradient(#faf54e, lightyellow);
  width: 500px;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 5px 5px 15px black;
`;

const Image = styled.img`
  border-radius: 20px;
  margin-top: 10px;
  box-shadow: 5px 5px 15px black;
`;

const Span = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const GithubLink = styled.a`
  margin-left: 10px;
  font-size: 16px;
`;

const UserCard = props => {
  return (
    <Card>
      <Image src={props.user.avatar_url} width="250" alt="Tiffany Simionescu" />
      <h1>{props.user.name}</h1>
      <h3>Location: <Span>{props.user.location}</Span></h3>
      <h3>Github Page:
        <span>
          <GithubLink href={props.user.html_url}>tiffany-simionescu</GithubLink>
        </span>
      </h3>
      <h3>Bio: 
        <Span>{props.user.bio}</Span>
      </h3>
    </Card>
  )
};

export default UserCard;