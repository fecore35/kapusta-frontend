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
    <div className="section__inner">
      <TransactionType />

      <ul className={s.list}>
        {categoryList && categoryList.length > 0 ? (
          categoryList.map(({ name, slug, totalSum }) => (
            <Category
              key={slug}
              name={name}
              total={totalSum}
              icon={slug}
              setCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
          ))
        ) : (
          <li className={s.notFound}>За данный период транзакций нет</li>
        )}
      </ul>
    </div>
  );
}

export default CategoryList;
