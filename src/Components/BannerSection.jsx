import { bannerInfo, movieImage, authorInfo } from "../constant/data"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
const Banner = () => {
    const settings = {
        dots: false,          // show navigation dots
        infinite: true,      // infinite loop
        speed: 500,          // transition speed in ms
        slidesToShow: 12,     // number of slides to show
        slidesToScroll: 12,   // number of slides to scroll
        autoplay: true,      // enable autoplay
        autoplaySpeed: 3000, // autoplay interval
        arrows: true,         // show next/prev arrows
        responsive: [
            {
                breakpoint: 768, // screen width < 768px
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                }
            }
        ]

    };

    return (
        <>
            <div className="banner-section">
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-up" className="col-lg-7 mx-auto">
                            <div className="banner-inner">
                                <h2 className="text-center">{bannerInfo[0].bannerTitle}</h2>
                                <p className="text-center">{bannerInfo[0].bannerDes}</p>
                                <div className="banner-btn">
                                    <Link className='main-btn border' to='/shop'><span className='me-2 fs-5'><PiShoppingCartSimpleFill />
                                    </span>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-below-sec" data-aos="fade-down">
                <div className="container">
                    <div className='row'>
                        <Slider {...settings}>
                            {
                                movieImage.map((data, idx) => {
                                    return (
                                        <div className='col-lg-2 col-12' key={idx}>
                                            <div className='banner-blow-slider-img'>
                                                <img src={data.mImage} alt={data.authName} />
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
export default Banner