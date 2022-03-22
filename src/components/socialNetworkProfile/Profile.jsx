import PropTypes from 'prop-types';
import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './profileStats';
import { ProfileCard } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
