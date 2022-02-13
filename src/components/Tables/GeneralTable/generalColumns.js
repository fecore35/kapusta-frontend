import { format } from 'date-fns'

export const COLUMNS = [

    {
        Header: 'Дата',
        accessor: "date",
        Cell: ({ value }) => { return format(new Date(value), 'dd.MM.yy') }
    },
    {
        Header: 'Категория',
        accessor: "category",
    },
    {
        Header: 'Покупка',
        accessor: "product",
    },
    {
        Header: 'Цена',
        accessor: "price",
    },

]