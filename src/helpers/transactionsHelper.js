import Categories from 'constants/categories';

const categories = [
  ...Categories.incomeCategory,
  ...Categories.spendingCategory,
];
export const transactionsHelper = array => {
  return array
    .map(transaction => {
      const month = String(transaction.month + 1).padStart(2, '0');
      const dateToTable = `${transaction.year}-${month}-${transaction.day}`;
      const category = categories.find(
        category => category.value === transaction.category,
      );
      return { ...transaction, date: dateToTable, label: category.label };
    })
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
};
