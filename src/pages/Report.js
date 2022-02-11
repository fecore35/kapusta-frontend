import CategoryList from 'components/CategoryList/CategoryList';
import TopPanel from 'components/TopPanel/TopPanel';
import {StatisticsHeader } from 'components/StatisticsHeader/StatisticsHeader'

function Report() {
  return (
    <>
      <TopPanel showGoBack />
      <StatisticsHeader/>
      <CategoryList />
    </>
  );
}

export default Report;
