import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { createBrowserHistory } from 'history';
import { initUser } from 'redux/authreducer';
import authSelectors from 'redux/authSelectors';

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const { user } = queryString.parse(history.location.search);
  const isAuthUser = useSelector(authSelectors.getAuth);

  useEffect(() => {
    if (user) {
      const userObj = JSON.parse(user);
      dispatch(initUser({ user: userObj }));
    }
  }, [dispatch, user]);

  return { isAuthUser };
};
