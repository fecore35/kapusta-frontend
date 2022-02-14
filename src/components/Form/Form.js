import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormSelect from 'components/FormSelect/FormSelect';
import FormInput from 'components/FormInput/FormInput';
import DatePicker from 'components/Calendar/calendar';
import { reportSelectors } from 'redux/report';
import { extraDataSelectors } from 'redux/extraData';
import s from './Form.module.scss';

const incomeCategory = [
  { value: '', label: 'Категория товара' },
  { value: 'transport', label: 'Транспорт' },
  { value: 'foods', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alco', label: 'Алкоголь' },
  { value: 'fun', label: 'Развлечения' },
  { value: 'house', label: 'Все для дома' },
  { value: 'tech', label: 'Техника' },
  { value: 'utilities', label: 'Коммуналка, связь' },
  { value: 'sport', label: 'Спорт, Хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const spendingCategory = [
  { value: '', label: 'Категория дохода' },
  { value: 'salary', label: 'ЗП' },
  { value: 'addition', label: 'Доп.доход' },
];

const FormLabel = () => {
  const [valueCalendar, onChange] = useState(new Date(), 'yyyy-MM-dd');
  const isIncome = useSelector(reportSelectors.getReportType);
  const date = useSelector(extraDataSelectors.getDate);

  const onSaveTransaction = (values, { setSubmitting, resetForm }) => {
    console.log({
      ...date,
      sum: formik.values.calc,
      income: isIncome,
      category: formik.values.category.value,
      description: formik.values.description,
    });
  };

  const setValidate = Yup.object({
    description: Yup.string().required('Обязательно'),
    category: Yup.object().required('Обязательно'),
    calc: Yup.number()
      .min(0.01)
      .positive('Должен быть положительным числом')
      .required('Обязательно'),
  });

  const formik = useFormik({
    initialValues: {
      description: '',
      category: '',
      calc: '',
    },
    validationSchema: setValidate,
    onSubmit: onSaveTransaction,
  });

  useEffect(() => {
    formik.setFieldValue();
    formik.values.category = isIncome ? spendingCategory[0] : incomeCategory[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIncome]);

  const resetForm = () => {
    formik.setFieldValue();
    formik.values.description = '';
    formik.values.category = isIncome ? spendingCategory[0] : incomeCategory[0];
    formik.values.calc = '';
  };

  return (
    <form className={s.form} onSubmit={formik.handleSubmit} autoComplete="off">
      <div className={s.inputList}>
        <label className={s.calendar}>
          <i className={s.calendarIcon}></i>
          <div className={s.calendarWrap}>
            <DatePicker
              name="calendar"
              selected={valueCalendar}
              className={s.calendarInput}
            />
          </div>
        </label>
        <FormInput
          type="text"
          name="description"
          placeholder="Описание товара."
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
          touched={formik.touched.description}
          classLabel={s.descriptionLabel}
        />
        <FormSelect
          id="category"
          name="category"
          options={isIncome ? spendingCategory : incomeCategory}
          value={formik.values.category}
          onChange={formik.setFieldValue}
          onBlur={formik.setFieldTouched}
          error={formik.errors.category}
          touched={formik.touched.category}
          className={s.categoryLabel}
        />

        <FormInput
          type="number"
          name="calc"
          value={formik.values.calc}
          onChange={formik.handleChange}
          error={formik.errors.calc}
          touched={formik.touched.calc}
          classLabel={s.calcLabel}
          min="0"
          placeholder="0,00"
          step=".01"
        />
      </div>
      <div className={s.btnList}>
        <button type="submit" name="buttonYes" className="buttonYes">
          Вввод
        </button>
        <button
          type="reset"
          name="buttonNo"
          className="buttonNo"
          onClick={resetForm}
        >
          Очистить
        </button>
      </div>
    </form>
  );
};

export default FormLabel;
