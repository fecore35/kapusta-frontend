import { useState } from 'react';
import Button from 'components/Button/Button';
import Category from './Category';
import s from './CategoryList.module.scss';

import arrowLeft from '../../icons/arrow-l.svg';
import arrowRight from '../../icons/arrow-r.svg';
import Schedule from 'components/homepage/schedule/Shedule';

function CategoryList() {
  const [type, setType] = useState('Расход');
  const [category, setCategory] = useState('1');

  const onChangeTypeHandler = () => {
    if (type === 'доход') {
      return setType('Расход');
    }
    setType('доход');
  };

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
          <Category
            id="1"
            name="FOODS"
            total="2000.12"
            icon="foods"
            setCategory={setCategory}
            currentCategory={category}
          />
          <Category
            id="2"
            name="SPORT"
            total="9000.00"
            icon="sport"
            setCategory={setCategory}
            currentCategory={category}
          />
        </ul>
      </div>
      <Schedule type={type} category={category} />
    </div>
  );
}

export default CategoryList;
