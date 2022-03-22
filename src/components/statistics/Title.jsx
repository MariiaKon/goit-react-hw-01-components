import PropTypes from 'prop-types';
import { Title } from './Statistics.styled';

export const StatsTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

StatsTitle.propTypes = {
  text: PropTypes.string,
};
