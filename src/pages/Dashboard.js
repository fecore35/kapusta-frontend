import Form from 'components/Form/Form';
import TopPanel from 'components/TopPanel/TopPanel';
import { AppOperation } from '../components/AppOperation/AppOperation';

function Dashboard() {
  return (
    <>
      <TopPanel showReport />
      <AppOperation />
      <Form />
    </>
  );
}

export default Dashboard;
