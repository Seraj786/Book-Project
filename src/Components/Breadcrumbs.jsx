import { Link } from "react-router-dom"

const Breadcrumbs = () => {
  return (
   <>
    <div className="breadcrumbs-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-inner">
              <ul className="d-flex">
                <li><Link to="/">Home |</Link> </li>
                <li> About </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Breadcrumbs
