import React from 'react'
import { Link } from 'react-router-dom'

const Return = () => {
  return (
    <>
    <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> Retrun Policy </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='return-policy'>
        <div className='container py-5'>
          <div className='row'>
            <div className='terms-inner'>
              <h1 className="mb-4">Return & Refund Policy</h1>
              <p>Last updated: June 12, 2025</p>

              <section className="mb-5">
                <h4>1. Returns</h4>
                <p>
                  We accept returns within <strong>7 days</strong> of delivery. If 7 days have passed since your purchase,
                  unfortunately, we can’t offer a refund or exchange.
                </p>
                <p>
                  To be eligible for a return, the item must be unused, in the same condition that you received it, and in its original packaging.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Return Process</h4>
                <p>
                  To initiate a return, please contact us at <a href="mailto:support@mybook.com">support@mybook.com</a> with your order number and reason for return.
                </p>
                <p>Once your return is approved, we will provide a return shipping label and instructions.</p>
              </section>

              <section className="mb-5">
                <h4>3. Non-returnable Items</h4>
                <p>The following items cannot be returned:</p>
                <ul>
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Personalized or custom-made items</li>
                  <li>Items marked as final sale</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>4. Refunds</h4>
                <p>
                  Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
                  If approved, your refund will be processed within 5–7 business days and automatically applied to your original method of payment.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Late or Missing Refunds</h4>
                <p>If you haven’t received a refund yet:</p>
                <ul>
                  <li>Check your bank account again.</li>
                  <li>Contact your credit card company — it may take some time before your refund is officially posted.</li>
                  <li>Contact your bank. Processing times vary by bank.</li>
                </ul>
                <p>If you’ve done all this and still have not received your refund, contact us at <a href="mailto:support@mybook.com">support@mybook.com</a>.</p>
              </section>

              <section className="mb-5">
                <h4>6. Exchanges</h4>
                <p>
                  We only replace items if they are defective or damaged. If you need to exchange it for the same item,
                  email us with photos and a description of the issue.
                </p>
              </section>

              <section className="mb-5">
                <h4>7. Shipping Costs</h4>
                <p>
                  Return shipping costs are non-refundable unless the item was defective or incorrect. In such cases,
                  we will cover the return shipping charges.
                </p>
              </section>

              <section>
                <h4>8. Contact Us</h4>
                <p>
                  For questions related to refunds and returns, please contact us at{' '}
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

export default Return
