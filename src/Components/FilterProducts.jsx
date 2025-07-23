import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const CategoryFilter = ({ data }) => {
  return (
    <div className="filter-pro-sec">
      <div className="container">
        <div className="row">
          <div data-aos="fade-down" className="col-lg-7 mx-auto pt-5">
            <div className="filter-heading text-center">
              <h1>Choose Your Favorite Books!</h1>
              <p className="mb-4">
                Reading fiction helps you understand other people's thoughts,
                emotions, and experiences — increasing emotional intelligence
                and empathy.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-0 mt-1" id="product-list">
          {data.slice(0, 8).map((book, index) => (
            <div className="col-lg-3 col-md-3 col-sm-4 col-6" key={index}>
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
                    ${book.discountPrice}
                  </span>
                </div>

                <Link to={`/products/${book._id}`} className="main-btn mt-3">
                  <span className="me-2 fs-5">
                    <PiShoppingCartSimpleFill />
                  </span>
                  Shop Now
                </Link>
              </div>
            </div>
          ))}

          <div className="col-lg-4 mx-auto">
            <div className="shop-now text-center mt-5">
              <Link to="/shop" className="main-btn w-100 text-uppercase">
                <span className="me-2 fs-5">
                  <PiShoppingCartSimpleFill />
                </span>
                View All Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
