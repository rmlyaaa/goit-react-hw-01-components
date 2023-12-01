import { Item, List } from './Friends.styled';
import { Friend } from './FriendsItem';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Friend friend={friend} />
        </Item>
      ))}
    </List>
  );
};
