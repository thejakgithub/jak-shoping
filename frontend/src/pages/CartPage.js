import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import numeral from 'numeral';

//Components
import CartItem from "../components/CartItem";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function CartPage() {

  let history = useHistory();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () =>{
    const price = cartItems.reduce((price,item)=>(item.price * item.qty)+price,0);
    return  numeral(price).format('$0,0.00');
    
  }

  const submitHandler = () =>{
      if(getCartCount()>0){
        history.push('/checkout');
      }
  }


  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>{getCartSubtotal()}</p>
        </div>
        <div>
          <button type="submit" onClick={submitHandler}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
