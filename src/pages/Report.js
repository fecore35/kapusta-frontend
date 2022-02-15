import TopPanel from 'components/TopPanel/TopPanel';
import CategoryList from 'components/CategoryList/CategoryList';
import Schedule from 'components/homepage/schedule/Shedule';
import { StatisticsHeader } from 'components/StatisticsHeader/StatisticsHeader';

function Report() {
  return (
    <>
      <TopPanel showGoBack showCalendar />
      <StatisticsHeader />
      <CategoryList />
      <Schedule />
    </>
  );
}
export default Report;
