import Slider from "react-slick";
import { authorInfo } from '../constant/data'
import { Link } from "react-router-dom";

function FeatureAuthor() {

    const settings = {
        dots: false,          // show navigation dots
        infinite: true,      // infinite loop
        speed: 500,          // transition speed in ms
        slidesToShow: 5,     // number of slides to show
        slidesToScroll: 5,   // number of slides to scroll
        autoplay: true,      // enable autoplay
        autoplaySpeed: 3000, // autoplay interval
        arrows: true,        // show next/prev arrows
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
            <div className='authors' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className='container'>
                    <div className='author-in-main'>
                        <h2 className='text-center'>Feature Authors</h2>
                        <div className='row'>
                            <Slider {...settings}>
                                {
                                    authorInfo.map((data, idx) => {
                                        return (
                                            <div className='col-md-4' key={idx}>
                                                <div className='author-inner-prt'>
                                                    <img src={data.authImg} alt={data.authName} />
                                                <p className='m t-3'>{data.authName}</p>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureAuthor
