import PropTypes from 'prop-types';

import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ stats }) => {
    return (
        <StatisticsSection>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}

export default Statistics;