import Breadcrumbs from "../Components/Breadcrumbs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

import { Link, useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increamentProduct, decrementProduct } from "../cart/cartSlice";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ShopDetails = () => {
  const { data } = useContext(ProductContext);
  const { Id } = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const singleProduct = useGetSingleProduct(Id);

  const cartProduct = cartItems.find((item) => item.id === Id);

  const handleAddToCart = (product) => {
    const productWithQty = { ...product, cartQuantity: 1 };
    dispatch(addToCart(productWithQty));
  };

  const handleIncrement = () => {
    if (cartProduct) {
      dispatch(increamentProduct(singleProduct));
    } else {
      dispatch(addToCart({ ...singleProduct, cartQuantity: 1 }));
    }
  };

  const handleDecrement = () => {
    if (cartProduct && cartProduct.cartQuantity > 1) {
      dispatch(decrementProduct(singleProduct));
    }
  };

  if (singleProduct === null) return "Loading...";

  const {
    publisher,
    pname,
    discountPrice,
    productimage,
    pprice,
    category,
    author,
    Decriptions,
    language,
    bookFormat,
    topic,
    Lesson,
    pages,
    publishedDate
  } = singleProduct;

  return (
    <>
      <div className="breadcrumbs-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-inner">
                <ul className="d-flex">
                  <li><Link to="/">Home |</Link> </li>
                  <li><Link to="/shop">Product |</Link> </li>
                  <li> Product Details </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-details-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <div className="leftProimages">
                    <img src={productimage} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-details">
                    <h2>{pname}</h2>
                    <div className="rating">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>

                    <div className="book-details">
                      <div className="writer">
                        <p className="fw-medium mb-2 text-black">Writen By</p>
                        <p className="mb-0">{author}</p>
                      </div>
                      <div className="publisher">
                        <p className="fw-medium mb-2 text-black">Publisher</p>
                        <p className="mb-0">{publisher}</p>
                      </div>
                      <div className="publisher-catagory">
                        <p className="fw-medium mb-2 text-black">Category</p>
                        <p className="mb-0">{category}</p>
                      </div>
                      <div className="publisher-year">
                        <p className="fw-medium mb-2 text-black">Year</p>
                        <p className="mb-0">{publishedDate}</p>
                      </div>
                    </div>

                    <div className="pro-details-para py-3">
                      <p>{Decriptions}</p>
                    </div>

                    <div className="pro-price-section mt-4 d-flex">
                      <div className="p-price">
                        <h5 className="fs-1"> ${(pprice * (cartProduct?.cartQuantity || 1)).toFixed(2)}
                          <span className="text-decoration-line-through fs-5">
                            ${discountPrice}
                          </span></h5>
                      </div>

                      <div className="price-update-btn mx-3">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>-</button>
                          <input
                            type="text"
                            id="quantity"
                            className="form-control text-center fs-5 fw-medium"
                            value={cartProduct ? cartProduct.cartQuantity : 1}
                            readOnly
                          />
                          <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
                        </div>
                      </div>

                      <div className="quantity-and-btn">
                        <Link to="/cart" className="main-btn" onClick={() => handleAddToCart(singleProduct)}>
                          <span className="me-2 fs-5"><PiShoppingCartSimpleFill /></span>Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pro-details-for-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pro-details-content-left">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="profile" title="Descriptions" className="tab-text">
                    <p>{Decriptions}</p>
                  </Tab>
                  <Tab eventKey="home" title="Details of Book">
                    <table className="table border book-overview">
                      <tbody>
                        <tr><th>Book Title</th><td>{pname}</td></tr>
                        <tr><th>Author</th><td>{author}</td></tr>
                        <tr><th>Ediiton Language</th><td>{language}</td></tr>
                        <tr><th>Book Format</th><td>{bookFormat}</td></tr>
                        <tr><th>Date Published</th><td>{publishedDate}</td></tr>
                        <tr><th>Publisher</th><td>{publisher}</td></tr>
                        <tr><th>Pages</th><td>{pages}</td></tr>
                        <tr><th>Lesson</th><td>{Lesson}</td></tr>
                        <tr><th>Topic</th><td>{topic}</td></tr>
                      </tbody>
                    </table>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="col-lg-4">
              <h2>Related Books</h2>
              {data.slice(0, 2).map((product) => (
                <div className="row align-items-center mb-2" key={product.id}>
                  <div className="col-lg-4 col-6">
                    <div className="related-inner-img">
                      <img src={product.productimage} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-6">
                    <div className="related-inner-detailss">
                      <h5>{product.pname}</h5>
                      <p className="mb-0">{product.author}</p>
                      <p className="fw-medium">${product.pprice}</p>
                      <Link className="main-btn" onClick={() => handleAddToCart(product)}>
                        <span className="me-2 fs-5"><PiShoppingCartSimpleFill /></span>Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
