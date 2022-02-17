import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { reportSelectors } from 'redux/report';
import './summaryTable.scss';
import { monthHelper } from '../../../helpers/monthHelper';
import axios from 'axios';
const SummaryTable = ({ balance }) => {
  const [summary, setSummary] = useState([]);
  const summaryIncome = useSelector(reportSelectors.getReportType);
  const getDataSummary = async () => {
    try {
      const data = await axios.get(`/transactions/summary`);
      return setSummary(data.data.data.summary);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataSummary();
  }, [balance]);
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
const mapStateToProps = state => {
  return {
    balance: state.auth.balance,
  };
};
export default connect(mapStateToProps)(SummaryTable);
