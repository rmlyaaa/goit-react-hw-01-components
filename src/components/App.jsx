import user from '../user.json';
import { Profile } from './Profile/Profile.js';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <GlobalStyle />
    </div>
  );
};
