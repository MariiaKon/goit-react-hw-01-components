import PropTypes from 'prop-types';
import { StatsTitle } from './Title';
import { Stats } from './Stats';
import { StatSection, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatsTitle text={title} />}

      <StatList>
        {stats.map(stat => (
          <Stats
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
