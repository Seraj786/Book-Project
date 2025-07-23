import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { ProductContext } from "../context/ProductContext";
import Breadcrumbs from "../Components/Breadcrumbs";

const Shop = () => {
  const { data } = useContext(ProductContext);
  const [filterData, setFilterData] = useState(data);
  const [activeCategory, setActiveCategory] = useState("All");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter Categories
  const filterCategory = data.map((book) => book.category);
  const uniqueCategory = ["All", ...new Set(filterCategory)];

  // Filter by Category
  const filterProduct = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);

    if (category === "All") {
      setFilterData(data);
    } else {
      const updateItems = data.filter(
        (curElem) => curElem.category === category
      );
      setFilterData(updateItems);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumbs-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-inner">
                <ul className="d-flex">
                  <li>
                    <Link to="/">Home |</Link>{" "}
                  </li>
                  <li>Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-pro-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto pt-5">
              <div className="filter-heading text-center">
                <h1>Choose Your Favorite Books!</h1>
                <p className="m-0">
                  Reading fiction helps you understand other people's thoughts,
                  emotions, and experiences — increasing emotional intelligence
                  and empathy.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div>
              {uniqueCategory.map((category, index) => (
                <button
                  key={index}
                  onClick={() => filterProduct(category)}
                  className={`btn btn-md me-2 mb-2 filter-btn border py-2 px-4 ${
                    activeCategory === category
                      ? "bg-info active-btn text-dark"
                      : "btn-light"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product List */}
          <div
            className="row justify-content-center g-0 mt-1"
            id="product-list"
          >
            {currentItems.map((book) => (
              <div className="col-lg-3 col-md-3 col-sm-4 col-6" key={book._id}>
                <div className="product-item">
                  <div className="product-img">
                    <img
                      src={book.productimage}
                      alt="img"
                      className="img-fluid mx-auto"
                    />
                  </div>
                  <div className="product-content text-center mt-3">
                    <span className="d-block fw-normal pro-name text-truncate">
                      {book.pname}
                    </span>
                    <span className="d-block author-name text-truncate">
                      Author - {book.author}
                    </span>
                    <span className="pro-price">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(book.pprice)}
                    </span>
                    <span className="discount-price text-decoration-line-through">
                      {book.discountPrice}
                    </span>
                  </div>
                  <div className="shop-now text-center mt-3">
                    <Link to={`/products/${book._id}`} className="main-btn">
                      <span className="me-2 fs-5">
                        <PiShoppingCartSimpleFill />
                      </span>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="main-pagination mt-4">
            <div className="row mb-4">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center pagi-my-class">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link page-link-custom"
                      onClick={goToPrevious}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link page-link-custom"
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link page-link-custom"
                      onClick={goToNext}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
