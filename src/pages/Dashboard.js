import TopPanel from 'components/TopPanel/TopPanel';
import TransactionType from 'components/TransactionType/TransactionType';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';

function Dashboard() {
  return (
    <>
      <section className="section section-topPanel">
        <div className="container">
          <TopPanel showReport />
        </div>
      </section>

      <section className="section section-dashboard">
        <div className="container">
          <TransactionType isThemeTabs />
          <div className="section__inner">
            <Form />
            <UserView />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
