import Media from 'react-media';
import TopPanel from 'components/TopPanel/TopPanel';
import TransactionType from 'components/TransactionType/TransactionType';
import Form from 'components/Form/Form';
import UserView from 'components/UserView/UserView';
import Sections from 'components/sections/Sections';
import DashboardViewMob from 'components/DashboardViewMob/DashboardViewMob';

function Dashboard() {
  return (
    <>
      <Media
        query="(max-width: 767.98px)"
        render={() => <DashboardViewMob />}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <Sections className="section-topPanel topPanel-dashboard">
              <TopPanel showReport />
            </Sections>
            <Sections className="section-dashboard">
              <TransactionType isThemeTabs />
              <div className="section__inner">
                <Form />
                <UserView />
              </div>
            </Sections>
          </>
        )}
      />
    </>
  );
}

export default Dashboard;
