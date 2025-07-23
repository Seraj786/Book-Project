import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import { Link } from "react-router-dom";
import TotalCart from "./TotalCart";
const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    // Handle form submission here
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
                  <li>
                    <Link to="/cart">Cart |</Link>{" "}
                  </li>
                  <li> Checkout </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-main">
        <div className="container py-5">
          <div className="row">
            <h2 className="mb-4">Checkout</h2>
            <div className="col-md-7">
              <div className="card">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">Zip</label>
                        <input
                          type="text"
                          name="zip"
                          className="form-control"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <h4 className="my-3">Payment Details</h4>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Card Name</label>
                        <input
                          type="text"
                          name="cardName"
                          className="form-control"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          className="form-control"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Exp Date (MM/YY)</label>
                        <input
                          type="text"
                          name="expDate"
                          className="form-control"
                          value={formData.expDate}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          className="form-control"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <p>
                      <span>
                        <input className="me-2" type="checkbox" name="" />
                      </span>
                      I agree to the{" "}
                      <Link to="./terms" target="_blank">
                        Terms and Conditions
                      </Link>{" "}
                      and
                      <Link to="./privacy" target="_blank">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <Link to="/thankyou" className="main-btn mt-3">
                      Complete your Order
                    </Link>
                    {/* <button type="submit" className="complete-btn btn btn-primary mt-3">
                                            Complete your Order
                                        </button> */}
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="checkout-final-total sticky-top sticky-offset">
                <TotalCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
