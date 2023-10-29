import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
`;

export const FriendStatus = styled.span`
  width: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.isOnline ? p => p.theme.colors.green : p => p.theme.colors.red};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
`;
