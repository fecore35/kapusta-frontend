import TopPanel from 'components/TopPanel/TopPanel';
import TransactionType from 'components/TransactionType/TransactionType';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';
import Sections from 'components/sections/Sections.js';
function Dashboard() {
  return (
    <>
      <Sections>
        <TopPanel showReport />
      </Sections>

      <Sections className=" section-dashboard">
        <TransactionType isThemeTabs />
        <div className="section__inner">
          <Form />
          <UserView />
        </div>
      </Sections>
    </>
  );
}

export default Dashboard;
