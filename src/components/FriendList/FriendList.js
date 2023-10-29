import { FriendListItem } from '../FriendListItem/FriendListItem.js';
import { FriendsListWrapper } from './FriendList.styled';


export const FriendList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsListWrapper>
  );
};
