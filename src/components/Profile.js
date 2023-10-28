import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const UserInfo = styled.div`
  text-align: center;
`;

const UserStats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  margin: 0 20px;
`;

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
