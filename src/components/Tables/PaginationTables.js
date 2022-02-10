import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './sortedColumns'
import './BasicTable.scss'


export const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns: columns,
        data: data,
    }, useSortBy, usePagination)
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, previousPage, nextPage, } = tableInstance
    return (
        <div><table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr{...headerGroup.getHeaderGroupProps}>
                        {
                            headerGroup.headers.map(column => (

                                <th{...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>{column.isSorted ? (column.isSortedDesc ? '⬆️' : '⬇️') : ''}
                                    </span>
                                </th>
                            ))
                        }

                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr{...row.getRowProps()}>{
                                row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                })
                            }

                            </tr>)
                    })
                }
            </tbody>
        </table>
            <div className='pageNavigation'>
                <button className='pageNavigationButton' onClick={() => previousPage()}>Назад</button>
                <button className='pageNavigationButton' onClick={() => nextPage()}>Дальше</button>
            </div>
        </div>)
};
