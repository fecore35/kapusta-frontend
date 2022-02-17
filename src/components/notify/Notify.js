import {connect} from 'react-redux'
import s from './notify.module.scss'
function Notify({balance,closeModal}) {
    return <div className ={s.overlay}>
    <div className={s.notify}>
        <p className={s.text}>Поздравляем, операция успешна!.
            Ваш баланс изменился.
            Текущий баланс : `${balance}`</p>
        <button type='button' onClick={closeModal} className={s.button}>Ок</button>
    </div>
    </div>
}
const mapStateToProps = (state) => {
    return {
     balance: state.auth.balance,
    }
  }
  export default connect(mapStateToProps, )(Notify);