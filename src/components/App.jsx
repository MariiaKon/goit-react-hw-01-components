import { Profile } from 'components/socialNetworkProfile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactions/TransactionsTable';
import user from 'components/socialNetworkProfile/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friendList/friends.json';
import transactions from 'components/transactions/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
