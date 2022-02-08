import styles from './HomePage.module.scss';
import kapusta from './kapusta2.png';
import SignupForm from './SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import CategoryList from 'components/CategoryList/CategoryList';

function HomePage() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <div className={styles.homepage}>
      <CategoryList />
      <div className={styles.hero}>
        <div className={styles.tagline}>
          <h1 className={styles.heading}>Kapu$ta</h1>
          <p className={styles.description}>Smart finance</p>
        </div>
        {!isAuth && <SignupForm className={styles.signup} />}
      </div>

      <img src={kapusta} alt="kapusta" className={styles.kapusta} />
    </div>
  );
}
export default HomePage;
