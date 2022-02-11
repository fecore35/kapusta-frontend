import TopPanel from 'components/BalanceForm/BalanceForm';
import { AppOperation } from 'components/AppOperation/AppOperation';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';

function Dashboard() {
  return (
    <section className="section-dashboard section">
      <div className="container">
        <TopPanel showReport />
        <AppOperation />
        <div className="section__inner">
          <Form />
          <UserView />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
