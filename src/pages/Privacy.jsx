import { Link } from "react-router-dom"

const Privacy = () => {
  return (
    <>
    <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> Privacy Policy </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="privacy-policy-main">
        <div className="container py-5">
          <div className="row">
            <div className="terms-inner">
              <h1 className="mb-4">Privacy Policy</h1>
              <p>Last updated: June 12, 2025</p>

              <section className="mb-5">
                <h4>1. Introduction</h4>
                <p>
                  Welcome to MyBook. This Privacy Policy explains how we collect, use, disclose, and protect your personal information
                  when you use our website and services.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Information We Collect</h4>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>Personal information such as name, email address, and contact details</li>
                  <li>Payment information (processed through secure third-party services)</li>
                  <li>Usage data, such as pages visited, time spent on pages, and interaction data</li>
                  <li>Device information including IP address, browser type, and device identifiers</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>3. How We Use Your Information</h4>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send notifications</li>
                  <li>Send you updates, offers, and marketing communications (only if you opt in)</li>
                  <li>Analyze usage and improve user experience</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>4. Sharing Your Information</h4>
                <p>We do not sell your personal data. We may share it with:</p>
                <ul>
                  <li>Trusted third-party service providers who help operate our business</li>
                  <li>Law enforcement or regulatory agencies when required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>5. Data Security</h4>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized access, disclosure,
                  alteration, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-5">
                <h4>6. Your Rights</h4>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>7. Cookies</h4>
                <p>
                  We use cookies to personalize content and analyze our traffic. You can control cookie settings through your browser.
                </p>
              </section>

              <section className="mb-5">
                <h4>8. Children's Privacy</h4>
                <p>
                  Our service is not intended for children under the age of 13. We do not knowingly collect personal data from children.
                </p>
              </section>

              <section className="mb-5">
                <h4>9. Changes to This Privacy Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h4>10. Contact Us</h4>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default Privacy
