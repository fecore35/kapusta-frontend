import { useState } from 'react';
import TopPanel from 'components/TopPanel/TopPanel';
import Sections from 'components/sections/Sections';
import TransactionType from 'components/TransactionType/TransactionType';
import DatePicker from 'components/Calendar/calendar';
import Form from 'components/Form/Form';
import s from './DashboardViewMob.module.scss';

function DashboardViewMob() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      {showForm ? (
        <Sections>
          <Form setShowForm={setShowForm} />
        </Sections>
      ) : (
        <>
          <div className={s.btnType}>
            <TransactionType isThemeTabs setShowForm={setShowForm} />
          </div>

          <Sections className="section-topPanel topPanel-dashboard">
            <TopPanel showReport />
          </Sections>

          <Sections className="section-dashboard">
            <label className={s.calendar}>
              <i className={s.calendarIcon}></i>
              <div className={s.calendarWrap}>
                <DatePicker className={s.calendarInput} />
              </div>
            </label>
          </Sections>
        </>
      )}
    </>
  );
}

export default DashboardViewMob;
