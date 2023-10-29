import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    to bottom,
    #f0f0f0,
    #aaa
  );
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserStats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  
`;

export const UserItem = styled.li`
  margin: 0 20px;
  
`;
