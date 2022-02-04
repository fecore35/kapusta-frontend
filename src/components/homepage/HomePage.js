import styles from './HomePage.module.scss';
import kapusta from './kapusta2.png';
function HomePage() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.tagline}>
          <h1 className={styles.heading}>Kapu$ta</h1>
          <p className={styles.description}>Smart finance</p>
        </div>
      </div>
      <img src={kapusta} alt="kapusta" className={styles.kapusta} />
    </div>
  );
}
export default HomePage;
