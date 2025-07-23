import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useContext(ProductContext);

  // const filteredProducts = data.filter(
  //   (product) =>
  //     product.pname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // cart functionality

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="main_nav">
        <div className="container">
          <Navbar expand="lg">
            <Container fluid data-aos="fade-down">
              <Link to="./" className="text-white fs-2 text-uppercase">
                <img className="logo-header logo" src={logo} alt="logo" />
              </Link>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="mx-auto my-2 my-lg-0">
                  <Link to="/" className="pe-4">
                    Home
                  </Link>
                  <Link to="/shop" className="pe-4">
                    Shop
                  </Link>
                  <Link to="/about" className="pe-4">
                    About us
                  </Link>
                  <Link to="/terms" className="pe-4">
                    Terms
                  </Link>
                  <Link to="/contact" className="pe-4">
                    Contact us
                  </Link>
                </Nav>

                {/* <div className="searchform">
                  <Link
                    to={"#"}
                    onClick={() => setOpen(!open)}
                    className="searchIcon"
                  >
                    <FaSearch />
                  </Link>
                </div> */}

                <div className="userIcon">
                  <Link to="./sign-in">
                    <FaUser />
                  </Link>
                </div>

                <div className="cartIcon">
                  <span className="icon">
                    <Link to="/cart">
                      <FaShoppingCart />
                    </Link>
                  </span>
                  <span className="iconCount">{cartItems.length}</span>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      {open === true ? (
        <div>
          <div className="searched-product-div">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <input
                    type="text"
                    className="form-control mb-5"
                    placeholder="Search your Books."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="row pb-3 align-items-center border-bottom">
                    {searchTerm && (
                      <ul className="list-group search-images">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product, index) => (
                            <li
                              key={index}
                              className="w-100 list-group-item d-flex justify-content-between align-items-center"
                            >
                              <Link
                                onClick={() => setOpen(false)}
                                to={`/products/${product._id}`}
                              >
                                {" "}
                                <p>{product.pname}</p>
                              </Link>
                              <p>
                                <img src={product.productimage} alt="img" />
                              </p>
                            </li>
                          ))
                        ) : (
                          <li className="text-muted">
                            <p className="no-products">
                              Sorry, we couldn't find any matching products.
                            </p>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay" onClick={() => setOpen(false)}>
              <IoCloseOutline />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
