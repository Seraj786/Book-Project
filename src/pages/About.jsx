import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Breadcrumbs from '../Components/Breadcrumbs'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> About us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className='about-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>About us </h2>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
