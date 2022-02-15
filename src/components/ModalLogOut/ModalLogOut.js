import React from 'react';
import s from './ModalLogOut.module.scss';

import { success, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import logOut from '../../icons/logOut.svg';

defaults.closerHover = false;
defaults.addModelessClass = 'logOutModal';
defaults.width = '380px';
defaults.styling = 'custom';
defaults.hide = false;

const ModalLogOut = ({ onClickSuccess }) => {
  function click() {
    success({
      text: 'Вы действительно хотите выйти?',
      modules: new Map([
        [
          Confirm,
          {
            confirm: true,
            buttons: [
              {
                addClass: 'buttonYes',
                text: 'Да',
                primary: true,
                promptTrigger: true,
                click: (notice, value) => {
                  notice.close();
                  notice.fire('pnotify:confirm', { notice, value });
                  onClickSuccess();
                },
              },
              {
                addClass: 'buttonNo',
                text: 'Нет',
                click: notice => {
                  notice.close();
                  notice.fire('pnotify:cancel', { notice });
                },
              },
            ],
          },
        ],
      ]),
    });
  }

  return (
    <div>
      <button type="button" onClick={click} className={s.buttonLogout}>
        <span className={s.logOut}>Выйти</span>
        <div className={s.logOut}>
          <img src={logOut} alt="logOut" width="16" height="16" />
        </div>
      </button>
    </div>
  );
};

export default ModalLogOut;
