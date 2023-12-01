import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile.js';
import { GlobalStyle } from './GlobalStyle';
import { Stats } from './Stats/Stats.js';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Stats stats={data} />
      <GlobalStyle />
    </div>
  );
};
