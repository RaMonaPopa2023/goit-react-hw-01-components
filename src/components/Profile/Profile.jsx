import styles from './Profile.module.css';
import user from './user.json';
import PropTypes from 'prop-types';

const Profile = () => {
  return (
    <div className={`${styles.profile} box ${styles.box}`}>
      <div className={styles.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{user.username}</p>
        <p className={styles.tag}>{`@${user.tag}`}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats} data-stats={JSON.stringify(user.stats)}>
        <li className={styles.list}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
