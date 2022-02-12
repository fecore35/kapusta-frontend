import TopPanel from 'components/TopPanel/TopPanel';
import TransactionType from 'components/TransactionType/TransactionType';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';

function Dashboard() {
  return (
    <section className="section-dashboard section">
      <div className="container">
        <TopPanel showReport />
        <TransactionType isThemeTabs />
        <div className="section__inner">
          <Form />
          <UserView />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
