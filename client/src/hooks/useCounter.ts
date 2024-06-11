import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '~/slices/counter';
import { RootState } from '~/store';

export const useCounter = () => {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.counter.value);
  const incrementCounter = () => dispatch(increment());
  const decrementCounter = () => dispatch(decrement());
  const incrementCounterByAmount = (amount: number) =>
    dispatch(incrementByAmount(amount));

  return {
    value,
    incrementCounter,
    decrementCounter,
    incrementCounterByAmount,
  };
};
