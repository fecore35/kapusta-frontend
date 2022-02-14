import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../../redux/asyncthunc';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';

const ButtonLogOutMob = () => {
  const dispatch = useDispatch();
    return <ModalLogOut onClickSuccess={() => dispatch(logOutThunk())}
    />;
};
export default ButtonLogOutMob;