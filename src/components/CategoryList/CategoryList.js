import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reportSelectors, reportOperation } from 'redux/report';
import Button from 'components/Button/Button';
import Category from './Category';
import s from './CategoryList.module.scss';

import arrowLeft from '../../icons/arrow-l.svg';
import arrowRight from '../../icons/arrow-r.svg';
import Schedule from 'components/homepage/schedule/Shedule';

function CategoryList() {
  const [type, setType] = useState('Расход');
  const categoryList = useSelector(reportSelectors.getReportCategory);
  const [currentCategory, setCurrentCategory] = useState();
  const dispatch = useDispatch();

  const onChangeTypeHandler = () => {
    if (type === 'доход') {
      return setType('Расход');
    }
    setType('доход');
  };

  useEffect(() => {
    dispatch(
      reportOperation.getCategory({
        month: '1',
        year: '2022',
      }),
    );
  }, [dispatch]);

  return (
    <div className={s.container}>
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
      <Schedule type={type} category={category} />
    </div>
  );
}

export default CategoryList;
