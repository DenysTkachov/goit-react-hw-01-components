import { FriendListItem } from './FriendListItem';

import styled from 'styled-components';

const FriendsListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  border: 2px solid #ccc; 
  border-radius: 10px; 
  padding: 10px; 
`;

const FriendListItemStyle = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;



const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 16px;
`;

export const FriendList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(friend => (
        <FriendListItemStyle key={friend.id}>
          <FriendListItem isOnline={friend.isOnline} />
          <Avatar src={friend.avatar} alt={`Avatar of ${friend.name}`} />
          <Name>{friend.name}</Name>
        </FriendListItemStyle>
      ))}
    </FriendsListWrapper>
  );
};





