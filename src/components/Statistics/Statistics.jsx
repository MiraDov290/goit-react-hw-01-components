import PropTypes from 'prop-types';

import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
      <StatisticsSection>
        {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}

export default Statistics;