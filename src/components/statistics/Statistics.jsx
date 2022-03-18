import { StatsTitle } from 'components/statistics/Title';
import { Stats } from 'components/statistics/Stats';
import data from 'components/statistics/data.json';
import { StatSection, StatList } from 'components/statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  stats = data;
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
