import styled from 'styled-components';

const StatisticSection = styled.section`
  background-color: #f3f7ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  gap: 10px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
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
