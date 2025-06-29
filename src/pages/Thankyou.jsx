import { Link } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs'

const Thankyou = () => {
  return (
    <>
         <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li><Link to="/checkout">Checkout |</Link> </li>
                <li> Thank You </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className='thanku-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 py-5'>
                        <h1 className='text-center'>Thank You</h1>
                        <p className='text-center'>Your Order id is : 420</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Thankyou
