import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile';
import userData from "./userData.json";
import FriendList from './components/FriendsList/FriendsList';
import friends from './friends.json';
import transactions from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
function App() {
 

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Завдання №1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
       image={userData.avatar}
      stats={userData.stats}
      />
      <h2>Завдання №2</h2>
      <FriendList
        friends={friends}
      />
      <h2>Завдання №3</h2>
      <TransactionHistory transactionsHistory={transactions}/>
    </>
  )
  
}

export default App
