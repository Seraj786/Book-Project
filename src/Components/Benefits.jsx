import { FcGraduationCap, FcBullish, FcMindMap } from "react-icons/fc";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Benefits() {
  return (
   <>
   <div className='banefits-sec py-5 mt-4'>
    <div className='container'>
        <div className='row'>
            <div data-aos="fade-down" className='col-lg-8 mx-auto text-center'>
                <h1 className='mb-3'>Benefits of Reading Books!</h1>
                <p>Studies suggest that regular reading may help keep the brain active 
                    and healthy as you age, potentially lowering the risk of Alzheimer’s 
                    and dementia.</p>
            </div>
        </div>
        <div className='row mt-5'>
            <div data-aos="fade-down" className='col-lg-4 mb-1'>
                <div className='benefit-inner'>
                    <div className='benefit-icons'>
                        <FcGraduationCap/>
                    </div>
                    <h2 className='mb-2'>Enhances Knowledge</h2>
                    <p className='pb-3'>Books are a powerful source of information. 
                        Whether it's fiction, non-fiction, 
                        or self-help, every book teaches you something new.</p>
                        <Link className='main-btn border' to='/shop'><span className='me-2 fs-5'><PiShoppingCartSimpleFill/></span>Shop Now</Link>
                </div>
            </div>

            <div data-aos="fade-down" className='col-lg-4 mb-1'>
                <div className='benefit-inner'>
                    <div className='benefit-icons'>
                        <FcBullish/>
                    </div>
                    <h2 className='mb-2'>Improves Language Skills</h2>
                    <p className='pb-3'>Regular reading introduces you to new words, 
                        expressions, and writing styles. This helps improve both your 
                        spoken and written communication.</p>
                        <Link className='main-btn border' to='/shop'><span className='me-2 fs-5'><PiShoppingCartSimpleFill/></span>Shop Now</Link>
                </div>
            </div>

            <div data-aos="fade-down" className='col-lg-4 mb-1'>
                <div className='benefit-inner'>
                    <div className='benefit-icons'>
                        <div className='benefit-icons'>
                        <FcMindMap/>
                    </div>
                    </div>
                    <h2 className='mb-2'>Boosts Imagination</h2>
                    <p className='pb-3'>When you read, your brain visualizes characters, 
                        places, and events — which sharpens your imagination and stimulates 
                        creative thinking.</p>
                        <Link className='main-btn border' to='/shop'><span className='me-2 fs-5'><PiShoppingCartSimpleFill/></span>Shop Now</Link>
                </div>
            </div>


        </div>
    </div>
   </div>

   </>
  )
}

export default Benefits
