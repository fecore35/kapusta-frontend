import { useState } from 'react';
import { useFormik } from 'formik';
import styles from './SignUpForm.module.scss';
import googleIcon from './google.svg';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.window}>
      <div className={styles.googleAuth}>
        <p className={styles.text}>
          Вы можете авторизоваться с помощью <br />
          Google Account:
        </p>
        <a href="www.google.com" className={styles.googleLink}>
          <img src={googleIcon} alt="google" />
          <span className={styles.googleText}>Google</span>
        </a>
      </div>
      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля,
        <br /> предварительно зарегистрировавшись:
      </p>
      <div className={styles.form}>
        <form onSubmit={handlerSubmit}>
          <label htmlFor="email" className={styles.inputLabel}>
            Электронный адрес:
          </label>
          <ul className={styles.list}>
            <li className={styles.item}>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                onChange={inputHandler}
                value={email}
                placeholder="example@mail.com"
              />
            </li>
            <label htmlFor="password" className={styles.inputLabel}>
              Пароль:
            </label>
            <li className={styles.item}>
              <input
                className={styles.input}
                id="password"
                name="password"
                type="password"
                onChange={inputHandler}
                value={password}
                placeholder="************"
              />
            </li>
            <li className={styles.item}>
              <button type="submit" className={styles.signIn}>
                <span className={styles.buttonText}>Войти</span>
              </button>
              <button type="button" className={styles.signOn}>
                <span className={styles.buttonText}>Регистрация</span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
