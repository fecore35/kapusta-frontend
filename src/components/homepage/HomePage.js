import styles from './HomePage.module.scss';
import kapusta from '../../components/homepage/images/desktop/kapusta2.png';
import kapusta2 from '../../components/homepage/images/mobile/kapusta2.png';
import SignupForm from './SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';

function HomePage() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className={styles.tagline}>
          <h1 className={styles.heading}>Kapu$ta</h1>
          <p className={styles.description}>Smart finance</p>
        </div>
        {!isAuth && <SignupForm className={styles.signup} />}
      </div>
      <picture>
        <source
          srcSet={kapusta2}
          media="(max-width:310px)"
          type="image/png"
        ></source>
        <source
          srcSet={kapusta}
          media="(min-width:768px)"
          type="image/png"
        ></source>
        <source
          srcSet={kapusta}
          media="(min-width:1280px)"
          type="image/png"
        ></source>
        <img src={kapusta2} alt="kapusta" className={styles.kapusta} />
      </picture>
    </div>
  );
}
export default HomePage;
