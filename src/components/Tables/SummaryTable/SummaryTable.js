import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { summaryColumns } from './summaryColumns';
import './summaryTable.scss';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-35.herokuapp.com';


export const SummaryTable = () => {
  const columns = useMemo(() => summaryColumns, []);

  const [summary, setSummary] = useState([])
  const getSummary = async () => {
    try {
      const { data } = await axios.get(
        `/transactions/summary`
      )
      setSummary(data.data.summary);
      return data.data.summary
    } catch (error) {
      return (error);
    }
  }

  useEffect(() => {
    getSummary()
  }, [])

  const data = useMemo(() => summary, [summary]);



  /////
  // import { useSelector } from 'react-redux';
  // import { reportSelectors } from 'redux/report';
  // const isIncome = useSelector(reportSelectors.getReportType);



  const tableInstance = useTable({
    columns: columns,
    data: data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table className='summaryTbl'{...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps}>
            {headerGroup.headers.map((column, index) => (
              <th key={index} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr key={index} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
