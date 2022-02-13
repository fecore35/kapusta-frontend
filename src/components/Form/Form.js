/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Calendar from 'components/Calendar/calendar.js';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import s from './Form.module.scss';
import calendar from '../../icons/calendar.png';
import calcImg from '../../icons/calcImg.png';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.errors ? (
        <div className="errors">{meta.errors}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.errors ? (
        <div className="errors">{meta.errors}</div>
      ) : null}
    </>
  );
};

const StyledErrorsMessage = styled.div`
  font-size: 12px;
  color: red;
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
`;

const StyledSelect = styled.select`
  color: #c7ccdc;
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
      {meta.touched && meta.errors ? (
        <StyledErrorsMessage>{meta.errors}</StyledErrorsMessage>
      ) : null}
    </>
  );
};

const FormLabel = () => {
  const [isIncome, setisIncome] = useState(false);

  const [category, setCategory] = useState('');
  const [expensesOpt, setExpensesOpt] = useState('');
  const [incomesOpt, setIncomesOpt] = useState('');

  const [valueCalendar, onChange] = useState(new Date(), 'yyyy-MM-dd');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLabel, setShowlabel] = useState(false);

  // const data = type === 'incomes' ? incomesOpt : expensesOpt;
  // let desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';

  const categoryLabel =
    // type === 'incomes' ? 'Категория дохода' : 'Категория товара';
    // const emptyLabel = '';

    useEffect(() => {
      //  desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';
    }, [isIncome]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'expensOpt':
        setExpensesOpt(value);
        break;

      default:
        return;
    }
  };
  const handleClick = e => {
    setShowlabel(true);
    setCategory(e.target.dataset.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    reset();
    const newOperation = {
      category,
    };

    // onHandleClick();
  };
  const reset = () => {
    setCategory('');
    setShowlabel(false);
    setExpensesOpt();
    setIncomesOpt();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
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
          sum: Yup.number().min(1).positive().integer().required('Required'),
          name: Yup.string().required(),
          categories: Yup.string().required(),
          expensesOpt: Yup.string()
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
          incomesOpt: Yup.string()
            .oneOf(['ЗП', 'Доп.доход'], 'Invalid category')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={s.formFormic}>
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
              // value={product}
              type="text"
              rows="6"
              placeholder="Описание товара."
              onChange={handleChange}
            />
            {isIncome ? (
              <MySelect
                name="category"
                placeholder="Категория товара."
                // changerDescription={changerPlaceholder}
                // typeForm={typeForm}
              >
                <option value="">Категория товара</option>
                <option value="transport">Транспорт</option>
                <option value="products">Продукты</option>
                <option value="health">Здоровье</option>
                <option value="alcogol">Алкоголь</option>
                <option value="rest">Развлечения</option>
                <option value="for home">Все для дома</option>
                <option value="tehnics">Техника</option>
                <option value="communal, communication">
                  Коммуналка, связь
                </option>
                <option value="sport, hobby">Спорт, Хобби</option>
                <option value="education">Образование</option>
                <option value="other">Прочее</option>/{' '}
                {/* {data.map(el => (
//                 <MySelect value={el} onClick={handleClick} key={el}>
//                   {el}
//                 </MySelect>
//               ))} */}
              </MySelect>
            ) : (
              <MySelect
                name="category"
                placeholder="Категория дохода."
                // changerDescription={changerPlaceholder}
                // typeForm={typeForm}
                // onChange={handleChange}
                // value={categ}
              >
                <option value="">Категория дохода</option>
                <option value="">ЗП</option>
                <option value="">Доп.доход</option>
              </MySelect>
            )}
            <MyTextInput type="input" name="calc" placeholder="0.00" />
            <div className={s.calcWrapper}>
              <img src={calcImg} alt="calculator" className={s.calcImg} />
            </div>
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
