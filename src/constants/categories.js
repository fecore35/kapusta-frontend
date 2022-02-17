const incomeCategory = [
  { value: '', label: 'Категория дохода' },
  { value: 'salary', label: 'ЗП' },
  { value: 'addition', label: 'Доп.доход' },
];

const spendingCategory = [
  { value: '', label: 'Категория товара' },
  { value: 'transport', label: 'Транспорт' },
  { value: 'foods', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alco', label: 'Алкоголь' },
  { value: 'fun', label: 'Развлечения' },
  { value: 'house', label: 'Все для дома' },
  { value: 'tech', label: 'Техника' },
  { value: 'utilities', label: 'Коммуналка, связь' },
  { value: 'sport', label: 'Спорт, Хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const Categories = { incomeCategory, spendingCategory };

export default Categories;
