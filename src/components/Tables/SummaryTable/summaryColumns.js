const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];



export const summaryColumns = [
    {
        Header: 'Сводка',
        columns: [
            {
                Header: "rerewrwr",
                accessor: "month",
                Cell: ({ value }) => { return monthNames[new Date(value).getMonth()] }
            },
            {

                accessor: "summ",
            },
        ]
    }
]