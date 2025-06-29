import { Link } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs'

const Terms = () => {
  return (
    <>
       <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> Terms and Conditions </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='terms-page'>
        <div className="container py-5">
          <div className='row'>
            <div className='terms-inner'>
              <h1 className="mb-4">Terms and Conditions</h1>
              <p>Last updated: June 12, 2025</p>
              <section className="mb-5">
                <h4>1. Introduction</h4>
                <p>
                  Welcome to MyBook. These Terms and Conditions govern your use of our website and services.
                  By accessing or using our site, you agree to be bound by these terms.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Intellectual Property</h4>
                <p>
                  All content on this site, including logos, texts, graphics, images, and software, is the property of MyBook or its licensors and is protected by intellectual property laws.
                </p>
              </section>

              <section className="mb-5">
                <h4>3. User Responsibilities</h4>
                <p>
                  You agree not to misuse the website or help anyone else to do so. This includes posting illegal content,
                  hacking, or engaging in fraudulent behavior.
                </p>
              </section>

              <section className="mb-5">
                <h4>4. Termination</h4>
                <p>
                  We reserve the right to suspend or terminate your access to the site at our sole discretion, without notice or liability, for any reason.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Third-Party Links</h4>
                <p>
                  Our website may contain links to third-party websites that are not owned or controlled by us.
                  We are not responsible for the content, privacy policies, or practices of any third-party sites.
                </p>
              </section>

              <section className="mb-5">
                <h4>6. Limitation of Liability</h4>
                <p>
                  In no event shall MyBook be liable for any indirect, incidental, special, or consequential damages resulting from the use of our website.
                </p>
              </section>

              <section className="mb-5">
                <h4>7. Indemnification</h4>
                <p>
                  You agree to indemnify and hold harmless MyBook and its affiliates from any claims, damages, obligations, losses, or expenses arising from your use of the site.
                </p>
              </section>

              <section className="mb-5">
                <h4>8. Changes to Terms</h4>
                <p>
                  We reserve the right to update or change these Terms at any time. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section className="mb-5">
                <h4>9. Contact Us</h4>
                <p>
                  If you have any questions about these Terms, please contact us at <a href="mailto:support@mybook.com">support@mybook.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms
