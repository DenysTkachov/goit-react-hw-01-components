import {
  FriendItem,

  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <div
        style={{
          width: '20px',
          height: '20px',
          background: isOnline ? 'green' : 'red',
        }}
      ></div>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendItem>
  );
};
