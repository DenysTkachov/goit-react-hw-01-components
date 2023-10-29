import {
  ProfileContainer,
  UserInfo,
  UserStats,
  UserItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <img src={avatar} alt={username} />
        <p>
          <strong>{username}</strong>
        </p>
        <p>{tag}</p>
        <p>{location}</p>
      </UserInfo>
      <UserStats>
        <UserItem>
          <strong>Followers</strong>
          <p>
            <span>{stats.followers}</span>
          </p>
        </UserItem>
        <UserItem>
          <strong>Views</strong>
          <p>
            <span>{stats.views}</span>
          </p>
        </UserItem>
        <UserItem>
          <strong>Likes</strong>
          <p>
            <span>{stats.likes}</span>
          </p>
        </UserItem>
      </UserStats>
    </ProfileContainer>
  );
};
