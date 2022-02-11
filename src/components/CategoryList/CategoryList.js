import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportCategory } from 'redux/report/reportReducer';
import { useReportCategory } from 'hooks/useReportCategory';
import Category from './Category';
import s from './CategoryList.module.scss';
import TransactionType from 'components/TransactionType/TransactionType';

function CategoryList() {
  const { categoryList } = useReportCategory({ month: '1', year: '2021' });
  const [currentCategory, setCurrentCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    categoryList && setCurrentCategory(categoryList[0]?.slug);
  }, [categoryList]);

  useEffect(() => {
    dispatch(reportCategory(currentCategory));
  }, [currentCategory]);

  return (
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
  );
}

export default CategoryList;
