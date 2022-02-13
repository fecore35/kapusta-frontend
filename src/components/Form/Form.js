/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
// import Calendar from 'components/Calendar/calendar.js';
import getReportCategory from '../../redux/report/reportSelectors';
// import styled from '@emotion/styled';
import s from './Form.module.scss';
import calendar from '../../icons/calendar.png';
import 'react-calendar/dist/Calendar.css';
import calcImg from '../../icons/calcImg.png';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { reportOperation } from '../../redux/report';
import moment from 'moment';
import DropDownCategory from '../DropDownCategory/DropDownCategory';
// import { addTransaction } from '../../redux/transactions/transactionsOperations';
import balanceSlice from '../../redux/balancereducer';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.errors ? (
//         <div className="errors">{meta.errors}</div>
//       ) : null}
//     </>
//   );
// };

// const MyTextArea = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <textarea className="text-area" {...field} {...props} />
//       {meta.touched && meta.errors ? (
//         <div className="errors">{meta.errors}</div>
//       ) : null}
//     </>
//   );
// };

// const StyledErrorsMessage = styled.div`
//   font-size: 12px;
//   color: red;
//   width: 400px;
//   margin-top: 0.25rem;
//   &:before {
//     content: '❌ ';
//     font-size: 10px;
//   }
// `;

// const StyledSelect = styled.select`
//   color: #c7ccdc;
// `;

// const StyledLabel = styled.label`
//   margin-top: 1rem;
// `;

// const MySelect = ({ label, ...props }) => {
//   // useField() возвращает formik.getFieldProps(), formik.getFieldMeta()]
//   // которые мы можем распространить на <input>
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.errors ? (
//         <StyledErrorsMessage>{meta.errors}</StyledErrorsMessage>
//       ) : null}
//     </>
//   );
// };

const ValidationSchema = Yup.object().shape({
  sum: Yup.number().min(1).positive().integer().required('Required'),
  name: Yup.string().required(),
  categories: Yup.string().required(),
  // expensesOpt: Yup.string()
  //   .oneOf(
  //     [
  //       'transport',
  //       'products',
  //       'health',
  //       'alcogol',
  //       'rest',
  //       'for home',
  //       'tehnics',
  //       'communal, communication',
  //       'sport, hobby',
  //       'education',
  //       'other',
  //     ],
  //     'Invalid category',
  //   )
  //   .required('Required'),
  // incomesOpt: Yup.string()
  //   .oneOf(['ЗП', 'Доп.доход'], 'Invalid category')
  //   .required('Required'),
});

export default function FormLabel({ typeForm, dateFinder }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const [open, setOpen] = useState(false);
  // const [isIncome, setisIncome] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');

  const categoriesState = useSelector(getReportCategory);
  const ref = useRef();
  const dispatch = useDispatch();
  function updateReportList(type) {
    let reportType;
    type === true ? (reportType = 'i') : (reportType = 'o');
    dispatch(
      reportOperation({
        reportType: reportType,
        year: new Date().getFullYear(),
      }),
    );
  }

  const onSubmit = async data => {
    const { date, name, sum } = data;
    const newData = {
      type: typeForm,
      category: placeholderCategories.id,
      date: moment(date).format('YYYY-MM-DD'),
      description: name,
      amount: +sum,
    };

    // await dispatch(addTransaction(newData));

    updateReportList(typeForm);
    setPlaceholderCategories('');
    dispatch(balanceSlice());
    reset({
      name: '',
      categories: '',
      sum: '',
    });
  };

  useEffect(() => {
    const checkClickOutside = e => {
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [open]);

  const changerPlaceholder = (data, id) => {
    setPlaceholderCategories({ data, id });
    setOpen(false);
  };

  useEffect(() => {
    setValue('categories', placeholderCategories.data);
  }, [placeholderCategories, setValue]);

  useEffect(() => {
    dateFinder(selectedDate);
    setValue('date', selectedDate);
  }, [selectedDate, setValue, dateFinder]);

  // const [category, setCategory] = useState('');
  // const [expensesOpt, setExpensesOpt] = useState('');
  // const [incomesOpt, setIncomesOpt] = useState('');

  // const [valueCalendar, onChange] = useState(new Date(), 'yyyy-MM-dd');
  // const [showCalendar, setShowCalendar] = useState(false);
  // const [showLabel, setShowlabel] = useState(false);
  // const [categ, setCateg] = useState('');

  // const data = type === 'incomes' ? incomesOpt : expensesOpt;
  // // let desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';

  // const categoryLabel =
  //   type === 'incomes' ? 'Категория дохода' : 'Категория товара';
  // const emptyLabel = '';

  // useEffect(() => {
  //   //  desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';
  // }, [isIncome]);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'categ':
  //       setCateg(e.target.value);
  //       break;
  //     case 'category':
  //       setCategory(value);
  //       break;
  //     case 'expensOpt':
  //       setExpensesOpt(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };
  // const handleClick = e => {
  //   setShowlabel(true);
  //   setCategory(e.target.dataset.value);
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   reset();
  //   const newOperation = {
  //     category,
  //   };

  //   onHandleClick();
  // };
  // const reset = () => {
  //   setCategory('');
  //   setCateg('');
  //   setShowlabel(false);
  //   setExpensesOpt();
  //   setIncomesOpt();
  // };

  // const handleInputChange = e => {
  //   const { name, value } = e.currentTarget;
  // };
  // const calendarHandler = e => {
  //   if (
  //     e.target.name === 'calendar' ||
  //     e.target.closest('.calendarInner') ||
  //     e.target.classList.contains('react-calendar__tile')
  //   ) {
  //     return;
  //   }

  //   setShowCalendar(false);
  // };
  // useEffect(() => {
  //   document.addEventListener('click', calendarHandler);
  //   return () => {
  //     document.removeEventListener('click', calendarHandler);
  //   };
  // }, []);

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={s.formStyles}
        ref={ref}
      >
        <div className={s.productInfo}>
          <div className={s.datePosition}>
            <DatePicker
              {...register('date')}
              locale="ru"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              className={s.inputProductDate}
            />
            <div className={s.calendarPos}>
              <img src={calendar} alt="Calendar" />
            </div>
          </div>
          <div className={s.productPosition}>
            <div>
              <input
                {...register('name')}
                className={s.inputProductName}
                placeholder={typeForm ? 'Описание дохода' : 'Описание товара'}
              />
              {errors.name && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.DropDownPos}>
              <input
                autoComplete="off"
                {...register('categories')}
                className={s.inputСategoryName}
                placeholder={typeForm ? 'Категория дохода' : 'Категория товара'}
                onClick={() => setOpen(!open)}
                readOnly
              />
              {/* {open ? (
                <div className={s.arrowPos}>
                  <img src={arrow} alt="arrow" />
                </div>
              ) : (
                <div className={s.arrowPosDown}>
                  <img src={arrow} alt="arrow" />
                </div>
              )} */}
              {placeholderCategories === '' && errors.categories && (
                <p className={s.errors}>Required</p>
              )}
              {open && (
                <DropDownCategory
                  changerDescription={changerPlaceholder}
                  categoriesList={categoriesState}
                  typeForm={typeForm}
                />
              )}
            </div>
            <div className={s.inputValueProductPostion}>
              <input
                {...register('sum')}
                type="sum"
                className={s.inputValueProduct}
                onFocus={e => (e.target.placeholder = '')}
                placeholder="0"
              />
              {errors.sum && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.calculatorPos}>
              <img src={calcImg} alt="Calculator" />
            </div>
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
      </form>
      <div className={s.formStyles}></div>
    </div>
  );
}

FormLabel.propTypes = {
  typeForm: PropTypes.bool,
  dateFinder: PropTypes.func,
};

// {
//   isIncome ? (
//     <select
//       name="category"
//       placeholder="Категория товара."
//       changerDescription={changerPlaceholder}
//       typeForm={typeForm}
//     >
//       <option value="">Категория товара</option>
//       <option value="transport">Транспорт</option>
//       <option value="products">Продукты</option>
//       <option value="health">Здоровье</option>
//       <option value="alcogol">Алкоголь</option>
//       <option value="rest">Развлечения</option>
//       <option value="for home">Все для дома</option>
//       <option value="tehnics">Техника</option>
//       <option value="communal, communication">Коммуналка, связь</option>
//       <option value="sport, hobby">Спорт, Хобби</option>
//       <option value="education">Образование</option>
//       <option value="other">Прочее</option>
//       {/* {data.map(el => (
//                 <MySelect value={el} onClick={handleClick} key={el}>
//                   {el}
//                 </MySelect>
//               ))} */}
//     </select>
//   ) : (
//     <select
//       name="category"
//       placeholder="Категория дохода."
//       changerDescription={changerPlaceholder}
//       typeForm={typeForm}
//       // onChange={handleChange}
//       // value={categ}
//     >
//       <option value="">Категория дохода</option>
//       <option value="">ЗП</option>
//       <option value="">Доп.доход</option>
//     </select>
//   );
// }
