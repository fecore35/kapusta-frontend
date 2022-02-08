import { useState } from 'react';
import s from './CategoryList.module.scss';

function makeNumber(number) {
  var n = number.toString();
  var separator = ' ';
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + separator);
}

function CategoryList() {
  const [type, setType] = useState('Расход');
  const [category, setCategory] = useState(1);

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className="">Расходы</div>

        <ul className={s.list}>
          <li className={s.item} onClick={() => setCategory(0)}>
            <p className={s.total}>{makeNumber('3000.50')}</p>
            <i className={s.icon}>
              <svg width="56" height="56">
                <use href="sprite-category.svg#book"></use>
              </svg>
            </i>
            <p className={s.name}>Продукты</p>
          </li>
          <li
            className={s.item + ' ' + s.active}
            onClick={() => setCategory(1)}
          >
            <p className={s.total}>{makeNumber('200.00')}</p>
            <i className={s.icon}>
              <svg width="56" height="56">
                <use href="sprite-category.svg#alcohol"></use>
              </svg>
            </i>
            <p className={s.name}>Продукты</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
