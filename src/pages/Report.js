import Sections from 'components/sections/Sections';
import TopPanel from 'components/TopPanel/TopPanel';
import CategoryList from 'components/CategoryList/CategoryList';
import Schedule from 'components/homepage/schedule/Shedule';
import { StatisticsHeader } from 'components/StatisticsHeader/StatisticsHeader';

function Report() {
  return (
    <>
      <Sections className="section-topPanel section-topPanel--report">
        <TopPanel showGoBack showCalendar />
      </Sections>

      <Sections className="section-statistics">
        <StatisticsHeader />
      </Sections>

      <Sections>
        <CategoryList />
      </Sections>

      <Sections>
        <Schedule />
      </Sections>
    </>
  );
}
export default Report;
