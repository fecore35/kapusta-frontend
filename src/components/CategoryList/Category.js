import { makeNumber } from '../../helpers/makeNumber';
import s from './CategoryList.module.scss';

function Category({ name, total, icon, setCategory, currentCategory }) {
  let className = s.item;
  if (currentCategory === icon) {
    className += ` ${s.active}`;
  }

  return (
    <li className={className} onClick={() => setCategory(icon)}>
      <p className={s.total}>{makeNumber(total)}</p>
      <i className={s.icon}>
        <svg width="56" height="56">
          <use href={`./sprite-category.svg#${icon}`}></use>
        </svg>
      </i>
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default Category;
