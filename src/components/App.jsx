import { Profile } from 'components/socialNetworkProfile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactions/TransactionsTable';
import friends from 'components/friendList/friends.json';
import transactions from 'components/transactions/transactions.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
