import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { COLUMNS } from './generalColumns';
import trashbin from '../../../pictures/trashbin.svg';
import './GeneralTable.scss';
// import { } from '../../../pictures/'
import { useTransactions } from 'hooks/useTransactions';
import { useSelector, useDispatch } from 'react-redux';
import { reportSelectors } from 'redux/report';
import { transactionsOperation } from 'redux/transactions';

export const GeneralTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const isIncome = useSelector(reportSelectors.getReportType);

  const { income, spending, error, isLoading } = useTransactions();
  const dispatch = useDispatch();

  const handleButtonClick = (_e, { original }) => {
    dispatch(transactionsOperation.onDelete(original.id));
  };

  useEffect(() => {
    if (isIncome) {
      return setData(income);
    }

    setData(spending);
  }, [income, spending, isIncome]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => {
        return [
          ...columns,

          {
            Header: '',
            id: 'click-me-button',
            Cell: ({ row }) => (
              <button
                className="delBtn"
                type="button"
                onClick={e => {
                  handleButtonClick(e, row);
                }}
              >
                <img src={trashbin} alt="delete" width="18" height="18"></img>
              </button>
            ),
          },
        ];
      });
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
  } = tableInstance;
  return (
    <div>
      {isLoading ? <div>Loading...</div> : ''}
      <table className="generalTbl" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '⬆️' : '⬇️') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps({ className: 'row' })}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      key={index}
                      {...cell.getCellProps(
                        isIncome
                          ? { className: 'incomeCell' }
                          : { className: 'spendingsCell' },
                      )}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length > 10 && (
        <div className="pageNavigation">
          <button
            className="pageNavigationButton"
            onClick={() => previousPage()}
          >
            Назад
          </button>
          <button className="pageNavigationButton" onClick={() => nextPage()}>
            Дальше
          </button>
        </div>
      )}
    </div>
  );
};
