import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Percentage,
} from 'components/statistics/Statistics.styled';

export const Stats = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
