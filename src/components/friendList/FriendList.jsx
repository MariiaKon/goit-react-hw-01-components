import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendList/FriendListItem';
import { FriendListCss } from 'components/friendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCss>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListCss>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
