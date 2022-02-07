import { BasicTable } from '../Tables/BasicTable'
import styles from './UserView.module.scss';
function UserView() {
    return (
        <div >
            <div >
                <div className={styles.tagline}>
                    <h1 className={styles.heading}>Kapu$ta</h1>
                    <p className={styles.description}>Smart finance</p>
                </div>
                <BasicTable />
            </div>

        </div>
    );
}
export default UserView;