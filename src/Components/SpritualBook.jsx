import { useContext } from "react";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
const SpritualBook = () => {
    const {data} = useContext(ProductContext)
    const settings = {
        dots: false,          // show navigation dots
        infinite: true,      // infinite loop
        speed: 1000,          // transition speed in ms
        slidesToShow: 6,     // number of slides to show
        slidesToScroll: 5,   // number of slides to scroll
        autoplay: true,      // enable autoplay
        arrows: true,        // show next/prev arrows
        autoplaySpeed: 2000, // 1 second
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768, // screen width < 768px
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <>
            <div className="spritual-book-main">
                <div className="container">
                    <div className="row">
                        <h2 className="mb-3">Spritual Books</h2>
                        <Slider {...settings}>
                            {
                                data.map((data, idx) => {
                                    return (
                                        <div className='col-md-4' key={idx}>
                                            <div className='spritual-book-inner-prt'>
                                                <Link to={`/products/${data.id}`}>
                                                <img className='w-100' src={data.productimage} alt={data.pname} /></Link>
                                                <p className='mt-2 text-truncate fw-medium'>{data.pname}</p>
                                                <p className='mt-0 text-truncate text-info'>{data.author}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpritualBook
