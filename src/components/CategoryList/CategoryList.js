import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportType } from 'redux/report/reportReducer';
import { useReportCategory } from 'hooks/useReportCategory';
import Button from 'components/Button/Button';
import Category from './Category';
import s from './CategoryList.module.scss';

import arrowLeft from '../../icons/arrow-l.svg';
import arrowRight from '../../icons/arrow-r.svg';

function CategoryList() {
  const [type, setType] = useState('Расход');
  const { categoryList } = useReportCategory({ month: '1', year: '2021' });
  const [currentCategory, setCurrentCategory] = useState();
  const dispatch = useDispatch();

  const onChangeTypeHandler = () => {
    if (type === 'Доход') {
      dispatch(reportType(false));
      return setType('Расход');
    }
    setType('Доход');
    dispatch(reportType(true));
  };

  useEffect(() => {
    categoryList && setCurrentCategory(categoryList[0]?.slug);
  }, [categoryList]);

  return (
    <div className={s.inner}>
      <div className={s.control}>
        <Button className={s.button} onClick={onChangeTypeHandler}>
          <img src={arrowLeft} width="4" height="10" alt="" />
        </Button>
        <div className={s.type}>{type}</div>
        <Button className={s.button} onClick={onChangeTypeHandler}>
          <img src={arrowRight} width="4" height="10" alt="" />
        </Button>
      </div>

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
