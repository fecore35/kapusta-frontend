import Categories from 'constants/categories';

const categories = [
  ...Categories.incomeCategory,
  ...Categories.spendingCategory,
];

export const makeTransaction = transaction => {
  const month = String(transaction.month + 1).padStart(2, '0');
  const dateToTable = `${transaction.year}-${month}-${transaction.day}`;
  const category = categories.find(
    category => category.value === transaction.category,
  );
  return { ...transaction, date: dateToTable, label: category.label };
};

export const transactionsHelper = array => {
  return array
    .map(transaction => {
      return makeTransaction(transaction);
    })
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
};
