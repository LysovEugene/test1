import React from 'react';
import styles from './FriendList.module.css';
import T from 'prop-types';

const FriendListItem = ({ friend }) => {
  const avatar = friend.avatar;
  const name = friend.name;
  const isOnline = friend.isOnline;
  return (
    <li className={styles.friendListItem}>
      {isOnline ? (
        <span className={styles.status}></span>
      ) : (
        <span className={styles.statusOff}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="" width="96" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: T.shape({
    avatar: T.string.isRequired,
    name: T.string,
    isOnline: T.bool.isRequired,
  }),
};

export default FriendListItem;
