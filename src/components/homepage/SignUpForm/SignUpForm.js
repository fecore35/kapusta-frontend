import { useState } from 'react';
import { useFormik } from 'formik';
import styles from './SignUpForm.module.scss';
import { registerThunk, loginThunk } from '../../../redux/asyncthunc';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const inputHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handlerSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginThunk(user));
    setEmail('');
    setPassword('');
  };

  const handlerRegisterSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(registerThunk(user));
    // setEmail('');
    // setPassword('');
  };
  return (
    <div className={styles.register}>
      <p className={styles.text_align}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <a
        href="https://kapusta-35.herokuapp.com/auth/google"
        className={styles.google}
      >
        Google
      </a>

      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form action="" onSubmit={handlerSubmit}>
        <label htmlFor="email" className={styles.label}>
          <p className={styles.sign}>Электронная почта:</p>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            onChange={inputHandler}
            value={email}
            placeholder="example@mail.com"
          />
        </label>

        <label htmlFor="password" className={styles.label}>
          <p className={styles.sign}>Пароль:</p>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            onChange={inputHandler}
            value={password}
            placeholder="************"
          />
        </label>
        <div className={styles.wrap}>
          <button type="submit" className={styles.button}>
            войти
          </button>
          <button
            type="button"
            onClick={handlerRegisterSubmit}
            className={styles.button}
          >
            регистрация
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
