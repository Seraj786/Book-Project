import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../cart/cartSlice";
import TotalCart from "./TotalCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { data } = useContext(ProductContext);

  const settings = {
    dots: false, // show navigation dots
    infinite: true, // infinite loop
    speed: 1000, // transition speed in ms
    slidesToShow: 6, // number of slides to show
    slidesToScroll: 5, // number of slides to scroll
    autoplay: true, // enable autoplay
    arrows: true, // show next/prev arrows
    autoplaySpeed: 2000, // 1 second
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // screen width < 768px
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="breadcrumbs-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-inner">
                <ul className="d-flex">
                  <li>
                    <Link to="/">Home |</Link>{" "}
                  </li>
                  <li> Cart </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="table-responsive striped">
                <table className="table check-tbl">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th className="text-end">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr className="product-row">
                        <td className="product-item-img">
                          <img src={item.productimage} alt="img" />
                        </td>
                        <td className="product-item-name">{item.pname}</td>
                        <td className="product-item-price">
                          ${item.pprice.toFixed(2)}
                        </td>
                        <td className="product-item-totle">
                          {item.cartQuantity}
                        </td>
                        <td className="product-item-close text-end">
                          <a
                            className="ti-close cursor-pointer"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            <IoCloseSharp />
                          </a>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="5">
                        {" "}
                        {cartItems.length === 0 && (
                          <h5 className="text-center m-auto">
                            Cart is Empty
                            <Link to={"/shop"}>
                              <em> Shop Now</em>
                            </Link>
                          </h5>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <TotalCart />
            </div>
          </div>

          <div className="row">
            <h2 className="mb-3">Popular Books</h2>
            <Slider {...settings}>
              {data.map((data, idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <div className="spritual-book-inner-prt">
                      <Link to={`/products/${data._id}`}>
                        <img src={data.productimage} alt={data.pname} />
                        <p className="mt-2 text-truncate fw-medium">
                          {data.pname}
                        </p>
                        <p className="mt-0 text-truncate text-info">
                          {data.author}
                        </p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
