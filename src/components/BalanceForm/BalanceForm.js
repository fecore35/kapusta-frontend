import s from './BalanceForm.module.scss'

const BalanceForm = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>Баланс:</label>
      <input className={s.input} placeholder="00.00 UAH"></input>
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
