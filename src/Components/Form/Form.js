import React, { useEffect } from 'react';
import { useState } from 'react';
import Calendar from '../Calendar/calendar.js';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import s from './form.module.scss';
import calendar from '../../icons/calendar.png';
import 'react-calendar/dist/Calendar.css';
import calcImg from '../../icons/calcImg.png';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched ? null : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched ? null : null}
    </>
  );
};

const StyledSelect = styled.select`
  color: #c7ccdc; ;
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() возвращает formik.getFieldProps(), formik.getFieldMeta()]
  // которые мы можем распространить на <input>
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched ? null : null}
    </>
  );
};

const FormLabel = () => {
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('');
  const [valueCalendar, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'product':
        setProduct(value);
        break;
      case 'category':
        setCategory(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };
  const reset = () => {
    setProduct('');
    setCategory('');
  };

  const calendarHandler = e => {
    if (
      e.target.name === 'calendar' ||
      e.target.closest('.calendarInner') ||
      e.target.classList.contains('react-calendar__tile')
    ) {
      return;
    }

    setShowCalendar(false);
  };
  useEffect(() => {
    document.addEventListener('click', calendarHandler);
    return () => {
      document.removeEventListener('click', calendarHandler);
    };
  }, []);

  return (
    <>
      {/* <h1>.</h1> */}
      <Formik
        initialValues={{
          calendar: '',
          product: '',
          category: '',
          calc: '',
        }}
        validationSchema={Yup.object({
          product: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          calendar: Yup.number().required('Required'),
          calc: Yup.number().required('Required'),
          // acceptedTerms: Yup.boolean()
          //   .required('Required')
          //   .oneOf([true], 'You must accept the terms and conditions.'),
          category: Yup.string()
            // specify the set of valid values for  type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              [
                'transport',
                'products',
                'health',
                'alcogol',
                'rest',
                'for home',
                'tehnics',
                'communal, communication',
                'sport, hobby',
                'education',
                'other',
              ],
              'Invalid category',
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <img src={calendar} alt="calendar" className={s.calendarImg} />
          <MyTextInput
            value={valueCalendar}
            type="input"
            name="calendar"
            onFocus={() => setShowCalendar(true)}
          />
          <div className="calendarInner">
            {showCalendar && <Calendar onChange={onChange} />}
          </div>
          <div className={s.forma}>
            <MyTextArea
              name="product"
              value={product}
              type="text"
              rows="6"
              placeholder="Описание товара."
              onChange={handleChange}
            />
            <MySelect
              name="category"
              placeholder="Категория товара."
              onChange={handleChange}
              value={category}
            >
              <option value="">Категория товара</option>
              <option value="transport">Транспорт</option>
              <option value="products">Продукты</option>
              <option value="health">Здоровье</option>
              <option value="alcogol">Алкоголь</option>
              <option value="rest">Развлечения</option>
              <option value="for home">Все для дома</option>
              <option value="tehnics">Техника</option>
              <option value="communal, communication">Коммуналка, связь</option>
              <option value="sport, hobby">Спорт, Хобби</option>
              <option value="education">Образование</option>
              <option value="other">Прочее</option>
            </MySelect>
            <MyTextInput name="calc" type="number" placeholder="0.00" />
            {/* <img src={calcImg} alt="calculator" className={s.calcImg} /> */}
          </div>
          <button type="submit" name="buttonYes" className="buttonYes">
            ВВВОД
          </button>
          <button
            type="button"
            name="buttonNo"
            className="buttonNo"
            onClick={handleSubmit}
          >
            ОЧИСТИТЬ
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormLabel;
