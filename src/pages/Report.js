import CategoryList from 'components/CategoryList/CategoryList';
import TopPanel from 'components/BalanceForm/BalanceForm';

function Report() {
  return (
    <>
      <TopPanel showGoBack />
      <CategoryList />
    </>
  );
}

export default Report;
