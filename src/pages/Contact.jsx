import React from 'react'
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Breadcrumbs from '../Components/Breadcrumbs'
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<>
			<div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> Contact us </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
			<div className='contact-main py-5'>
				<div className='container'>
					<div className='row'>
						<div class="col-lg-7 mx-auto">
							<div class="contact-info">
								<div class="section-head text-white style-1">
									<h3 class="title text-dark">Get In Touch</h3>
									<p>If you are interested in working with us, please get in touch.</p>
								</div>
								<ul class="no-margin">
									<li class="icon-bx-wraper d-flex">
										<div class="icon-md">
											<span class="icon-cell">
												<FaMapMarkerAlt />
											</span>
										</div>
										<div class="icon-content ps-4">
											<h5 class=" dz-tilte text-dark">Our Address</h5>
											<p>9, Dr.H. K Chatterjee Lane, Belurmath, Howrah-711202 (W.B)</p>
										</div>
									</li>
									<li class="icon-bx-wraper d-flex m-b30">
										<div class="icon-md">
											<span class="icon-cell">
												<MdEmail />
											</span>
										</div>
										<div class="icon-content ps-4">
											<h5 class="dz-tilte text-dark">Our Email</h5>
											<p>info@gmail</p>
										</div>
									</li>

									<li class="icon-bx-wraper d-flex m-b30">
										<div class="icon-md">
											<span class="icon-cell">
												<FaPhone />
											</span>
										</div>
										<div class="icon-content ps-4">
											<h5 class="dz-tilte text-dark">Phone</h5>
											<p>8989898989</p>
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className='contact-map'>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9053517701104!2d88.35296547475853!3d22.620009331232062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7ba9e3d4cb%3A0x32c468aec1257718!2s9%2C%20HK%20Chatterjee%20Ln%2C%20Above%20Bhot%20Bagan%2C%20Bhot%20Bagan%2C%20Belur%20Math%2C%20Ghusuri%2C%20Howrah%2C%20West%20Bengal%20711202!5e0!3m2!1sen!2sin!4v1749814878394!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>

	)
}

export default Contact
