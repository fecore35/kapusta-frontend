import styles from './HomePage.module.scss';
import kapusta from '../../components/homepage/images/desktop/kapusta2.png';
import kapusta2 from '../../components/homepage/images/mobile/kapusta2.png';
import SignupForm from './SignUpForm/SignUpForm';
function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className={styles.tagline}>
          <h1 className={styles.heading}>Kapu$ta</h1>
          <p className={styles.description}>S M A R T F I N A N C E</p>
        </div>
        <SignupForm className={styles.signup} />
      </div>
      <picture>
        <source
          srcset={kapusta2}
          media="(max-width:310px)"
          type="image/png"
        ></source>
        <source
          srcset={kapusta}
          media="(min-width:768px)"
          type="image/png"
        ></source>
        <source
          srcset={kapusta}
          media="(min-width:1280px)"
          type="image/png"
        ></source>
        <img src={kapusta2} alt="kapusta" className={styles.kapusta} />
      </picture>
    </div>
  );
}
export default HomePage;
