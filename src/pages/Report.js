import TopPanel from 'components/TopPanel/TopPanel';
import CategoryList from 'components/CategoryList/CategoryList';
import Schedule from 'components/homepage/schedule/Shedule';

function Report() {
  return (
    <div className="container">
      <TopPanel showGoBack />
      <CategoryList />
      <Schedule />
    </div>
  );
}
export default Report;
