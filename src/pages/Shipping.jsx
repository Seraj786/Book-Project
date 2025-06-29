import { Link } from "react-router-dom"
import Breadcrumbs from "../Components/Breadcrumbs"

const Shipping = () => {
  return (
    <>
      <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> Shipping Details </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="shipping-terms">
        <div className="container py-5">
          <div className="row">
            <div className="terms-inner">
              <h1 className="mb-4">Shipping Policy</h1>
              <p>Last updated: June 12, 2025</p>

              <section className="mb-5">
                <h4>1. Order Processing</h4>
                <p>
                  All orders are processed within 1–2 business days (excluding weekends and holidays) after receiving your order
                  confirmation email. You will receive another notification when your order has shipped.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Shipping Rates and Estimates</h4>
                <p>
                  Shipping charges for your order will be calculated and displayed at checkout. We offer both standard and
                  expedited shipping options.
                </p>
                <ul>
                  <li><strong>Standard Shipping:</strong> 5–7 business days</li>
                  <li><strong>Express Shipping:</strong> 2–3 business days</li>
                  <li><strong>Overnight Shipping:</strong> 1 business day (available in select regions)</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>3. International Shipping</h4>
                <p>
                  We currently ship internationally to selected countries. International shipping times may vary based on customs
                  processes and local carriers. Import duties and taxes may apply, and are the responsibility of the customer.
                </p>
              </section>

              <section className="mb-5">
                <h4>4. How Do I Check My Order Status?</h4>
                <p>
                  Once your order has shipped, you will receive an email with a tracking number and link to track your package.
                  If you haven’t received your tracking information within 3 days of placing your order, contact us at{' '}
                  <a href="mailto:support@mybook.com">support@mybook.com</a>.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Delays & Exceptions</h4>
                <p>
                  While we do our best to ensure timely delivery, unforeseen delays may occur due to weather, carrier issues,
                  or public holidays. We are not liable for delays beyond our control but will assist you in tracking your shipment.
                </p>
              </section>

              <section className="mb-5">
                <h4>6. Lost or Damaged Packages</h4>
                <p>
                  If your order arrives damaged or is lost in transit, please contact us immediately with your order number and
                  relevant photos (if applicable). We will file a claim and work with you to resolve the issue.
                </p>
              </section>

              <section className="mb-5">
                <h4>7. Contact Us</h4>
                <p>
                  For any shipping-related inquiries, feel free to contact us at{' '}
                  <a href="mailto:support@mybook.com">support@mybook.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Shipping
