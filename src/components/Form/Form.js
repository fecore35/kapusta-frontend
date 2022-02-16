import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionsOperation } from 'redux/transactions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormSelect from 'components/FormSelect/FormSelect';
import FormInput from 'components/FormInput/FormInput';
import DatePicker from 'components/Calendar/calendar';
import { reportSelectors } from 'redux/report';
import { extraDataSelectors } from 'redux/extraData';
import Categories from 'constants/categories';
import s from './Form.module.scss';
import ModalConfirm from 'components/ModalConfirm/ModalConfirm';

const setValidate = Yup.object({
  description: Yup.string().required('Обязательно'),
  category: Yup.object().required('Обязательно'),
  calc: Yup.number()
    .min(0.01)
    .positive('Должен быть положительным числом')
    .required('Обязательно'),
});

const FormLabel = () => {
  const isIncome = useSelector(reportSelectors.getReportType);
  const date = useSelector(extraDataSelectors.getDate);
  const dispatch = useDispatch();

  const resetForm = () => {
    formik.resetForm();
  };

  const onSaveTransaction = async (values, { resetForm }) => {
    const newTransaction = {
      ...date,
      income: isIncome,
      sum: values.calc,
      category: values.category.value,
      description: values.description,
    };

    dispatch(
      transactionsOperation.addTransaction({ newTransaction, isIncome }),
    );

    resetForm();
  };

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
    formik.values.category = !isIncome
      ? Categories.spendingCategory[0]
      : Categories.incomeCategory[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIncome]);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit} autoComplete="off">
      <div className={s.inputList}>
        <label className={s.calendar}>
          <i className={s.calendarIcon}></i>
          <div className={s.calendarWrap}>
            <DatePicker
              name="calendar"
              // selected={valueCalendar}
              className={s.calendarInput}
            />
          </div>
        </label>
        <FormInput
          type="text"
          name="description"
          placeholder="Описание товара."
          value={formik.values.description || ''}
          onChange={formik.handleChange}
          error={formik.errors.description}
          touched={formik.touched.description}
          classLabel={s.descriptionLabel}
        />
        <FormSelect
          id="category"
          name="category"
          options={
            !isIncome ? Categories.spendingCategory : Categories.incomeCategory
          }
          value={formik.values.category || ''}
          onChange={formik.setFieldValue}
          onBlur={formik.setFieldTouched}
          error={formik.errors.category}
          touched={formik.touched.category}
          className={s.categoryLabel}
        />

        <FormInput
          type="number"
          name="calc"
          value={formik.values.calc || ''}
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
