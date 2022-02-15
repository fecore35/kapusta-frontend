import { useState } from 'react';
import s from './ModalStartBalanse.module.scss';

const ModalStartBalanse = () => {
  const [showModalStartBalanse, setShowModalStartBalanse] = useState(true);

  return (
    <>
      <div
        className={showModalStartBalanse ? s.showText : s.hideShowText}
        onClick={() => setShowModalStartBalanse(true)}
      >
        <p className={s.text}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={s.textNo}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </>
  );
};
export default ModalStartBalanse;
