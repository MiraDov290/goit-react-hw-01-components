import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
  <List>
    {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
  </List>
)};

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList;