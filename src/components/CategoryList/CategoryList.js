import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportCategory } from 'redux/report/reportReducer';
import { reportSelectors } from 'redux/report';
import { useReportCategory } from 'hooks/useReportCategory';
import Category from './Category';
import s from './CategoryList.module.scss';
import TransactionType from 'components/TransactionType/TransactionType';

function CategoryList() {
  const month = useSelector(reportSelectors.getMonth);
  const year = useSelector(reportSelectors.getYear);

  const { categoryList } = useReportCategory({ month, year });
  const [currentCategory, setCurrentCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    categoryList && setCurrentCategory(categoryList[0]?.slug);
  }, [categoryList]);

  useEffect(() => {
    dispatch(reportCategory(currentCategory));
  }, [currentCategory, dispatch]);

  return (
    <div className="section">
      <div className="container">
        <div className={s.inner}>
          <TransactionType />

          <ul className={s.list}>
            {categoryList &&
              categoryList.map(({ name, slug, totalSum }) => (
                <Category
                  key={slug}
                  name={name}
                  total={totalSum}
                  icon={slug}
                  setCategory={setCurrentCategory}
                  currentCategory={currentCategory}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
