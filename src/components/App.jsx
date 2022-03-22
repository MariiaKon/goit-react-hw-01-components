import { Profile } from 'components/socialNetworkProfile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import friends from 'components/friendList/friends.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
    </>
  );
};
