import React from 'react'
import css from './FriendsList.module.css'
import  FriendListItem from '../FriendListItem/FriendListItem'
function FriendsList({friends}) {
  return (
      <ul className={css.friendsListContainer}>
          {friends.map((friendData) => { return <li key={friendData.id}><FriendListItem friend={friendData} /></li> })}
      </ul>
  )
}

export default FriendsList