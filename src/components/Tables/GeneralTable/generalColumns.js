import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Дата',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd.MM.yyyy');
    },
  },
  {
    Header: 'Описание',
    accessor: 'description',
  },
  {
    Header: 'Категория',
    accessor: 'label',
  },

  {
    Header: 'Сумма',
    accessor: 'sum',
  },
];
