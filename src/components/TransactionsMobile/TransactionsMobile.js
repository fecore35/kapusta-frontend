import { useTransactions } from 'hooks/useTransactions';
import { transactionsOperation } from 'redux/transactions';
import {useDispatch,useSelector} from 'react-redux'
import {useEffect,useState} from 'react'
import { reportSelectors } from 'redux/report';
import { extraDataSelectors } from 'redux/extraData';
import s from './transactionsMobile.module.scss';
import img from '../../pictures/delete 1.png'
function TransactionsMobile() {
  const { income, spending, error, isLoading } = useTransactions();
  const [data, setData] = useState([]);
  const [incomeData, setIncome] = useState([]);
  const [spendingData, setSpending] = useState([]);
  const [filteredData,setFilter] = useState([])
  const date = useSelector(extraDataSelectors.getDate);
  const dispatch = useDispatch();
  useEffect(() => {
    setIncome(income)
  },[income])
  useEffect(() => {
    setSpending(spending)
  },[spending])
  useEffect(() => {
    setData([...incomeData,...spendingData])
  },[incomeData,spendingData])
  const month = String(Number(date.month) + 1).padStart(2, '0');
  const currentDate = `${date.year}-${month}-${date.day}`
  console.log(currentDate)
  const filter = () => data.filter(el => {
   return el.date == currentDate
  })
  useEffect(() => {
    setFilter(filter())
  },[data,date])
  const handleButtonClick = (id) => {
    dispatch(transactionsOperation.onDelete(id));
  };
  console.log(filteredData)
  return <div className={s.transactionBlock}>
  <ul>
    { filteredData.length === 0 ? 
    <p className={s.notFound}>За данный период транзакций нет</p> :
    filteredData.map(el => {
      return <li key={el.id} className={s.item}>
        <div className={s.heading}>
          <span className={s.name}>{el.description}</span>
          <div className={s.description}>
          <span className={s.date}>{el.date}</span>
          <p className={s.label}>
          {el.label}
          </p></div>
          </div>
          <div className={s.sumBlock}>
            { el.income ? (
            <span className={s.sum} style={{color:'#E7192E'}}>- {el.sum}грн.</span>) :
          (<span className={s.sum} style={{color:'#407946'}}>{el.sum}грн.</span>)}
          <button type='button' onClick={() => handleButtonClick(el.id)} className={s.delBtn}><img src={img}/></button>
          </div>
          </li>
    })}
  </ul>
  </div>;
}

export default TransactionsMobile;
