import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';

const FriendListItem = ({status, avatar, name}) => {
    return (
        <Item>
            <Status>{status}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    );
}

FriendListItem.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}

export default FriendListItem;