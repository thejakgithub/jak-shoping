import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar({ click }) {
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const [paymentAddress, setPaymentAddress] = useState(
    localStorage.getItem("paymentAddress") ?  JSON.parse(localStorage.getItem("paymentAddress")) : ''
  );

  const logoutHandler = () => {
    localStorage.removeItem("paymentAddress");
    history.push("/");
    history.go(0);
  };

 

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>JAK SHOPPING</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{ getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          {paymentAddress? (
            <>
              <Link to="/member" className="link__member">
                {paymentAddress.firstName}
              </Link>
              <div onClick={logoutHandler} className="link__logout">
                Logout
              </div>
            </>
          ) : (
            <Link to="/login" className="link__login">
              Login
            </Link>
          )}
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
