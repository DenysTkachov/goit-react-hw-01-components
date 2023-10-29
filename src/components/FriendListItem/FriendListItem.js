import {
  FriendItem,
  FriendStatus,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus $isOnline={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendItem>
  );
};
