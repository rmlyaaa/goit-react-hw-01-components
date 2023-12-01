import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile.js';
import { GlobalStyle } from './GlobalStyle';
import { Stats } from './Stats/Stats.js';
import { FriendsList } from './Friends/FriendsList';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Stats stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
      <GlobalStyle />
    </div>
  );
};
