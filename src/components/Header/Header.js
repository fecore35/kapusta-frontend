import s from './Header.module.scss';

export function Header() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <a className={s.statistics} href="/statistic">
          Перейти к отчетам
        </a>

        <div className={s.balance}>
          <p className={s.title}>Баланс:</p>

          <label>
            <input
              className={s.balance__input + ' ' + s.balance__item}
              type="text"
              id="balance"
              value="00.00 UAH"
            />
          </label>

          <button className={s.balance__btn + ' ' + s.balance__item}>
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </div>
    </div>
  );
}
