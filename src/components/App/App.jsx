import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import user from '../../user.json';
import stats from '../../statsData';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
