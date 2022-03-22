import PropTypes from 'prop-types';
import { Stats, Label, Quantity, StatsList } from './Profile.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <Stats>
      <StatsList>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsList>
    </Stats>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
