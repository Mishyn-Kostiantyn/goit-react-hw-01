import React from 'react'
import css from './Profile.module.css';
function Profile(user) {
  return (
      <div className={css.userCard}>
           <div className={css.userMainData}>
    <img className={css.userPicture}
      src={user.image}
      alt="User avatar"
    />
    <p className={css.userName}>{user.name}</p>
    <p className={css.userData}>{user.tag}</p>
        <p className={css.userData}>{user.location}</p>
  </div>

  <ul className={css.userActivity}>
    <li className={css.userActivityFeatures}>
      <span >Followers</span>
          <span className={css.userActivityFeaturesNumbers}>{user.stats.followers}</span>
    </li>
    <li className={css.userActivityFeatures}>
      <span >Views</span>
      <span className={css.userActivityFeaturesNumbers}>{user.stats.views}</span>
    </li>
    <li className={css.userActivityFeatures}>
      <span >Likes</span>
      <span className={css.userActivityFeaturesNumbers}>{user.stats.likes}</span>
    </li>
  </ul>
    </div>
  )
}

export default Profile