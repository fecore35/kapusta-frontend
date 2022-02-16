
import  SummaryTable  from '../Tables/SummaryTable/SummaryTable';
import { GeneralTable } from '../Tables/GeneralTable/GeneralTable';
import styles from './UserView.module.scss';


function UserView() {
  return (
    <div className={styles.overview}>
      <GeneralTable />
      <SummaryTable />
    </div>
  );
}
export default UserView;
