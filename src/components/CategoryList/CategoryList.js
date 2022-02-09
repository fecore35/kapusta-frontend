import { useState } from 'react';
import Category from './Category';
import s from './CategoryList.module.scss';

function CategoryList() {
  const [type, setType] = useState('Расход');
  const [category, setCategory] = useState(1);

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className="">Расходы</div>

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
    </div>
  );
}

export default CategoryList;
