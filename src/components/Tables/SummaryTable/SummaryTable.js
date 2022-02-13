import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_SUMMARY from '../MOCK_SUMMARY.json';
import { summaryColumns } from './summaryColumns';
import './summaryTable.scss';

export const SummaryTable = () => {
  const columns = useMemo(() => summaryColumns, []);
  const data = useMemo(() => MOCK_SUMMARY, []);
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
