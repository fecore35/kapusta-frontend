import React, { useState } from 'react';
import Calendar from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { useDispatch } from 'react-redux';
import { initDate } from 'redux/extraData/extraDataReducer';

function DatePicker({ className }) {
  const [value, onChange] = useState(new Date(), 'yyyy-MM-dd');
  const dispatch = useDispatch();

  const handleDateChange = date => {
    onChange(date);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    dispatch(initDate({ month, day, year }));
  };

  return (
    <Calendar
      locale={ru}
      dateFormat="dd.MM.yyyy"
      selected={value}
      onChange={handleDateChange}
      className={className}
    />
  );
}

export default DatePicker;
