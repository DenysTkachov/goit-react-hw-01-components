import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 400px;
  background-color: #f3f7ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  border: 2px solid #ccc;
  padding: 10px;
`;

export const Label = styled.span`
  display: flex;
`;

export const Percentage = styled.span``;
