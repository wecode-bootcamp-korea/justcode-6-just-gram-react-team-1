import styles from '../Main.module.scss';

const SearchItem = ({ profileImg, userId, desc }) => {
  return (
    <li className={`${styles['search-list']}`}>
      <img
        className={`${styles['search-user-profile']} mr15 curcle`}
        src={profileImg}
        alt='user profile img'
      />
      <div>
        <p className='bold'>{userId}</p>
        <p className={`${styles['feed-cont-more']}`}>{desc}</p>
      </div>
      <span className={`icon-setting ${styles['x-icon']} mr15`}></span>
    </li>
  );
};

export default SearchItem;
