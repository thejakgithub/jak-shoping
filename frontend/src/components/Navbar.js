import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

function Navbar({ click }) {
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const [memberName, setMemberName] = useState(
    localStorage.getItem("memberName") ?  localStorage.getItem("memberName") : ''
  );

  const logoutHandler = () => {
    localStorage.removeItem("memberName");
    history.push("/");
    history.go(0);
  };

 

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>JAK Shopping Cart</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          {memberName!==''? (
            <>
              <Link to="/member" className="link__member">
                {memberName}
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
