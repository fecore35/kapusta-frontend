/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Calendar from 'components/Calendar/calendar.js';
import { Formik, Form, useField, Field, ErrorMessage } from 'formik';
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

  const [expensesOpt, setExpensesOpt] = useState('');
  const [incomesOpt, setIncomesOpt] = useState('');

  const [valueCalendar, onChange] = useState(new Date(), 'yyyy-MM-dd');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [calculation, setCalculation] = useState('');

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
      case 'description':
        setDescription(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'calc':
        setCalculation(value);
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
          description: '',
          category: '',
          calc: '',
        }}
        validationSchema={Yup.object({
          description: Yup.string().required(),
          category: Yup.string()
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
          calc: Yup.number().min(1).positive().integer().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.formFormic}>
            <img src={calendar} alt="calendar" className={s.calendarImg} />
            <MyTextInput
              value={valueCalendar}
              type="text"
              name="calendar"
              onFocus={() => setShowCalendar(true)}
            />
            <div className="calendarInner">
              {showCalendar && <Calendar onChange={onChange} />}
            </div>
            <div className={s.forma}>
              <Field
                type="text"
                name="description"
                id="description"
                placeholder="Описание товара."
              />
              <ErrorMessage name="description" component="div" />

              <MySelect
                name="category"
                value={category}
                placeholder="Категория товара."
                onChange={handleChange}
                // changerDescription={changerPlaceholder}
                // typeForm={typeForm}
              >
                {isIncome ? (
                  <>
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
                    <option value="other">Прочее</option>/
                  </>
                ) : (
                  <>
                    <option value="">Категория дохода</option>
                    <option value="">ЗП</option>
                    <option value="">Доп.доход</option>
                  </>
                )}
              </MySelect>

              <MyTextInput
                type="input"
                value={calculation}
                name="calc"
                placeholder="0.00"
                onChange={handleChange}
              />
              <div className={s.calcWrapper}>
                <img src={calcImg} alt="calculator" className={s.calcImg} />
              </div>
            </div>
            <button
              type="submit"
              name="buttonYes"
              className="buttonYes"
              disabled={isSubmitting}
            >
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
        )}
      </Formik>
    </>
  );
};

export default FormLabel;
