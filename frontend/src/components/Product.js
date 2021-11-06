import "./Product.css";
import { Link } from "react-router-dom";
import numeral from 'numeral';

const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <div className="product__info">
      <img
        src={imageUrl}
        alt={name}
      />
        <p className="info__name">{name}</p>
        <p className="info__description">
       {description}
        </p>
        <p className="info__price">{numeral(price).format('$0,0')}</p>
        </div>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
    </div>
  );
};

export default Product;
