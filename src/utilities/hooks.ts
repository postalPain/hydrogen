import { useEffect } from 'react';
import { setError } from 'store/user/actions';
import { useDispatch } from 'react-redux';


export const useResetUserError = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(''));
  }, []);
};
