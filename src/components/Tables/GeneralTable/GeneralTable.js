import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import MOCK_DATA from '../MOCK_DATA.json';
import { COLUMNS } from './generalColumns';
import trashbin from '../../../pictures/trashbin.svg'
import './GeneralTable.scss';
// import { } from '../../../pictures/'

export const GeneralTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);


  const handleButtonClick = (e, row) => {
    console.log(row.id);
  }

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
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
            Cell: ({ row }) => (<button className='delBtn' type='button' onClick={(e) => {
              handleButtonClick(e, row)
            }}><img src={trashbin} alt='delete' width='18' height='18'></img></button>)
          }
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
      <table className='generalTbl'{...getTableProps()}>
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
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pageNavigation">
        <button className="pageNavigationButton" onClick={() => previousPage()}>
          Назад
        </button>
        <button className="pageNavigationButton" onClick={() => nextPage()}>
          Дальше
        </button>
      </div>
    </div>
  );
};