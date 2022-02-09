import s from '../UserPage/UserPage.module.scss';
import { Header } from '../../components/Header/Header';
import { AppOperation } from '../../components/AppOperation/AppOperation';
export function UserPage() {
  return (
    <div className={s.container}>
      <Header />
      <AppOperation />
    </div>
  );
}
