import styled from 'styled-components';

export const FriendStatus = styled.span`
  width: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.isOnline ? props.theme.colors.green : props.theme.colors.red};
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};
