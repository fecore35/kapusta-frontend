import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { reportSelectors } from 'redux/report';
import './summaryTable.scss';
import { monthHelper } from '../../../helpers/monthHelper';
import axios from 'axios';

const baseURL = 'https://kapusta-35.herokuapp.com';

export const SummaryTable = () => {
  const [summary, setSummary] = useState([]);
  const summaryIncome = useSelector(reportSelectors.getReportType);

  const getSummary = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/transactions/summary`);
      setSummary([...data.data.summary]);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <div className="summaryFrame">
      <div className="title">
        <h4>СВОДКА</h4>
      </div>
      <ul className="list">
        {summary.map(item => {
          const id = item.month;
          const { income, spending } = item;
          const monthName = monthHelper(item.month).toUpperCase();
          let sumValue = null;
          summaryIncome ? (sumValue = income) : (sumValue = spending);
          return (
            <li key={id} className="listItem">
              <p>{monthName}</p>
              <p>{sumValue}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
