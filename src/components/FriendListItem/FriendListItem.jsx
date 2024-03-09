import css from './FriendListItem.module.css';
import React from 'react'
import clsx from "clsx";
function FriendListItem({ friend }) {
    return (
        <div className={css.friendCard}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{friend.name}</p>
            <p className={clsx(css.friendOnline,{ [css.OffLine]: !friend.isOnline,})} >{friend.isOnline?'Online':'OffLine'}</p>
        </div>
    )
}
export default FriendListItem