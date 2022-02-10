const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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