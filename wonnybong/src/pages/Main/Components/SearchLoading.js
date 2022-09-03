import styles from '../Main.module.scss';

const SearchLoading = ({ textKR, textEN }) => {
  return (
    <div>
      <li className={`${styles['search-list']}vertical-center`}>
        <span className=' mr15 curcle' />
        <div>
          <p className='bold'>{textKR}</p>
          <p className={`${styles['feed-cont-more']}`}>{textEN}</p>
        </div>
        <span className='icon-setting mr15'></span>
      </li>
    </div>
  );
};

export default SearchLoading;
