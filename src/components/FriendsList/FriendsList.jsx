import React from 'react';
import { FriendListItem } from './FriendListItem';
import styles from './FriendsList.module.css';
import friends from './friends.json';

const FriendsListContainer = () => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

export default FriendsListContainer;
