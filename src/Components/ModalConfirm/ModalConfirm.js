import React from 'react';
import s from './ModalConfirm.module.scss';

import { success, info, defaultModules, defaults } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
import * as PNotifyCountdown from '@pnotify/countdown';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';

defaults.closerHover = false;
defaultModules.set(PNotifyBootstrap4, {});
defaults.addModelessClass = 'logOutModal';
defaults.styling = s;
// defaults.hide = false;

const ModalConfirm = () => {
  function click() {
    success({
      text: 'Вы уверены?',
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
      <button type="button" onClick={click}>
        Вы уверены?
      </button>
    </div>
  );
};

export default ModalConfirm;
