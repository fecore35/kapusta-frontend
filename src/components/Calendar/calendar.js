import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DatePicker() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar selectRange={false} locale={'ru-RU'} onChange={onChange} value={value} />
            <p>today is {JSON.stringify(value.toString()).slice(1, 11)}</p>
        </div>
    );
}

export default DatePicker
