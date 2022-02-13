import React, { useState } from 'react';
import Calendar from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

function DatePicker() {
  const [value, onChange] = useState(new Date(), 'yyyy-MM-dd');

  const handleDateChange = date => {
    onChange(date);
  };

  return (
    <div>
      <Calendar
        locale={ru}
        dateFormat="dd.MM.yyyy"
        selected={value}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatePicker;
