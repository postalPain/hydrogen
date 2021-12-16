import { ForwardedRef, useEffect, useRef } from 'react';
import { setError } from 'store/user/actions';
import { useDispatch } from 'react-redux';


export const useResetUserError = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(''));
  }, []);
};

export const useForwardedRef = (ref: ForwardedRef<any>) => {
  const innerRef = useRef(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      // eslint-disable-next-line no-param-reassign
      innerRef.current = ref.current;
    }
  });

  return innerRef;
};
