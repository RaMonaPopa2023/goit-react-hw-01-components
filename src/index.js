import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from './components/Profile/Profile';

import './index.css';

import { Statistics } from 'components/Statistics/Statistics';
import FriendsListContainer from './components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

const userData = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={userData} />
    <Statistics />
    <FriendsListContainer />
    <TransactionHistory />
  </React.StrictMode>
);
