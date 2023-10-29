import styled from 'styled-components';

const StatisticSection = styled.section`
  background-color: #f3f7ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc; 
  border-radius: 5px; 
`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;  
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  border: 2px solid #ccc;
  padding: 10px;
`;

const Label = styled.span`
  display: flex;
`;

const Percentage = styled.span``;

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>          
        ))}
      </StatList>
    </StatisticSection>
  );
};
