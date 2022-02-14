import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { reportSelectors } from 'redux/report';
import './summaryTable.scss';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-35.herokuapp.com';

export const SummaryTable = () => {
  const [summary, setSummary] = useState([]);
  const summaryIncome = useSelector(reportSelectors.getReportType);

  const tempSummary = [
    {
      year: 2022,
      month: 1,
      income: '12000.00',
      spending: '4870.85',
    },
    {
      year: 2022,
      month: 0,
      income: '12000.00',
      spending: 0,
    },
    {
      year: 2021,
      month: 11,
      income: '17000.00',
      spending: 0,
    },
    {
      year: 2021,
      month: 10,
      income: '10000.00',
      spending: 0,
    },
    {
      year: 2021,
      month: 9,
      income: '20000.00',
      spending: 0,
    },
    {
      year: 2021,
      month: 8,
      income: '20000.00',
      spending: 0,
    },
  ];

  useEffect(() => {
    setSummary([...tempSummary]);
  }, []);

  let monthName = null;
  const monthSubstitution = monthNumber => {
    switch (monthNumber) {
      case 0:
        monthName = 'ЯНВАРЬ';
        break;
      case 1:
        monthName = 'ФЕВРАЛЬ';
        break;
      case 2:
        monthName = 'МАРТ';
        break;
      case 3:
        monthName = 'АПРЕЛЬ';
        break;
      case 4:
        monthName = 'МАЙ';
        break;
      case 5:
        monthName = 'ИЮНЬ';
        break;
      case 6:
        monthName = 'ИЮЛЬ';
        break;
      case 7:
        monthName = 'АВГУСТ';
        break;
      case 8:
        monthName = 'СЕНТЯБРЬ';
        break;
      case 9:
        monthName = 'ОКТЯБРЬ';
        break;
      case 10:
        monthName = 'НОЯБРЬ';
        break;
      case 11:
        monthName = 'ДЕКАБРЬ';
        break;
      default:
        break;
    }
  };

  return (
    <div className="summaryFrame">
      <div className="title">
        <h4>СВОДКА</h4>
      </div>
      <ul className="list">
        {summary.map(item => {
          const id = item.month;
          const { income, spending } = item;
          let sumValue = null;
          summaryIncome ? (sumValue = income) : (sumValue = spending);
          monthSubstitution(item.month);
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
