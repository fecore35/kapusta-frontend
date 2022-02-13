import { format } from 'date-fns'

export const COLUMNS = [

    {
        Header: 'Дата',
        accessor: "date",
        Cell: ({ value }) => { return format(new Date(value), 'dd.MM.yyyy') }
    },
    {
        Header: 'Описание',
        accessor: "product",
    },
    {
        Header: 'Категория',
        accessor: "category",
    },

    {
        Header: 'Сумма',
        accessor: "price",
    },

]