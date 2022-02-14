import { format } from 'date-fns'

export const COLUMNS = [

    {
        Header: 'ДАТА',
        accessor: "date",
        Cell: ({ value }) => { return format(new Date(value), 'dd.MM.yyyy') }
    },
    {
        Header: 'ОПИСАНИЕ',
        accessor: "product",
    },
    {
        Header: 'КАТЕГОРИЯ',
        accessor: "category",
    },

    {
        Header: 'СУММА',
        accessor: "price",
        // Cell: ({ value }) => { return `- ${value}` }
    },

]

