import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './sortedColumns'
import { Checkbox } from './Checkbox'
import './BasicTable.scss'


export const RowSelection = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns: columns,
        data: data,
    }, useSortBy, usePagination, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                ...columns,
                {
                    id: 'selection',
                    // Header: ({ getToggleAllRowsSelectedProps }) => (<div>
                    //     <Checkbox {...getToggleAllRowsSelectedProps()} />
                    // </div>),
                    Cell: ({ row }) => (
                        <div>
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
            ]
        })
    })
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, previousPage, nextPage, selectedFlatRows } = tableInstance
    return (
        <div>
            <table {...getTableProps()}>
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
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedFlatRows: selectedFlatRows.map((row) => { return [row.original.id, row.original.category] },)

                        },
                        null,
                        2
                    )}
                </code>
            </pre>
        </div>)
};
