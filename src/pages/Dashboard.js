import TopPanel from 'components/TopPanel/TopPanel';
import { AppOperation } from 'components/AppOperation/AppOperation';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';

function Dashboard() {
  return (
    <>
      <TopPanel showReport />
      <AppOperation />
      <Form />
      <UserView />
    </>
  );
}

export default Dashboard;
