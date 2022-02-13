const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];



export const summaryColumns = [
    {
        Header: 'Сводка',
        columns: [
            {
                Header: "",
                accessor: "month",
                Cell: ({ value }) => { return monthNames[value] }
            },
            {
                accessor: "income",
            },
        ]
    }
]