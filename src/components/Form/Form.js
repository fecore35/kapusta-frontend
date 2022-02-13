/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reportSelectors } from 'redux/report';
import * as Yup from 'yup';
import DatePicker from 'components/Calendar/calendar';
import { Formik, Form, useField, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';
import s from './Form.module.scss';

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

const FormLabel = () => {
  const [valueCalendar, onChange] = useState(new Date(), 'yyyy-MM-dd');
  const isIncome = useSelector(reportSelectors.getReportType);

  return (
    <>
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
                'salary',
                'addition',
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
            <div>
              <DatePicker name="calendar" selected={valueCalendar} />
              <ErrorMessage name="calendar" component="div" />
            </div>
            <div className={s.forma}>
              <div>
                <Field
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Описание товара."
                />
                <ErrorMessage name="description" component="div" />
              </div>

              <div>
                <Field
                  as="select"
                  name="category"
                  placeholder="Категория товара."
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
                      <option value="salary">ЗП</option>
                      <option value="addition">Доп.доход</option>
                    </>
                  )}
                </Field>
                <ErrorMessage name="category" component="div" />
              </div>

              <div>
                <Field
                  type="number"
                  name="calc"
                  id="calc"
                  placeholder="Описание товара."
                />
                <ErrorMessage name="calc" component="div" />
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
            <button type="reset" name="buttonNo" className="buttonNo">
              ОЧИСТИТЬ
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormLabel;
