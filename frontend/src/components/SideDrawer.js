import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./sideDrawer.css";
import { useSelector } from "react-redux";

function SideDrawer({ show, click }) {
  let history = useHistory();

  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const [paymentAddress, setPaymentAddress] = useState(
  localStorage.getItem("paymentAddress") ? JSON.parse(localStorage.getItem("paymentAddress")) : ""
  );

  const logoutHandler = () => {
    localStorage.removeItem("paymentAddress");
    history.push("/");
    history.go(0);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__cartbadege">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          {paymentAddress ? (
            <>
              <Link to="/member">{paymentAddress.firstName}</Link>
              <Link onClick={logoutHandler}>Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
