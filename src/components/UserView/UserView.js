import { PaginationTable } from '../Tables/PaginationTables';
import { SummaryTable } from '../Tables/SummaryTable';
import { RowSelection } from '../Tables/SelectedRows';
import styles from './UserView.module.scss';
function UserView() {
  return (
    <div className={styles.overview}>
      <RowSelection />
      <SummaryTable />
    </div>
  );
}
export default UserView;
