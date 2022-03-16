import user from 'components/socialNetworkProfile/user.json';
import { ProfileDescription } from 'components/socialNetworkProfile/ProfileDescription';
import { ProfileStats } from 'components/socialNetworkProfile/profileStats';
import { ProfileCard } from 'components/socialNetworkProfile/Profile.styled';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

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
