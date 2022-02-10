import { PaginationTable } from '../Tables/PaginationTables'
import { SummaryTable } from '../Tables/SummaryTable'
import { RowSelection } from '../Tables/SelectedRows'
import styles from './UserView.module.scss';
function UserView() {
    return (
        <div >
            <div >
                <div className={styles.tagline}>
                    <h1 className={styles.heading}>Kapu$ta</h1>
                    <p className={styles.description}>Smart finance</p>
                </div>
                <div className={styles.overview}>
                    <RowSelection />
                    <SummaryTable />
                </div>

            </div>

        </div>
    );
}
export default UserView;