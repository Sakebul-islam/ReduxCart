import { useDispatch, useSelector } from 'react-redux';

import { uiAction } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();
  const cartQuentity = useSelector(state => state.cart.totalQuantity);

  const toggoleCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggoleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuentity}</span>
    </button>
  );
};

export default CartButton;
