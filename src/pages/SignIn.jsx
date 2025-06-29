import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <div className='singin-main'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-center mt-5'>Registration Form</h1>
                        <div className='col-lg-5 mx-auto'>
                            <div className='singin-inner'>
                                <div className='form-signin-button'>
                                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign Up</button>
                                </div>

                                {isLogin ? <>
                                    <div className='signIn-form'>
                                        <div className='row g-3 py-3 mt-4'>

                                            <div className='col-lg-12'>
                                                <input className='form-control py-3 mb-2' type='email' placeholder='Enter Your Email' />
                                            </div>

                                            <div className='col-lg-12 mt-0 text-end'>
                                                <input className='form-control py-3 mb-2 mb-3' type='password' placeholder='Enter Yuor Password' />
                                                <Link to="#">Forgot Password?</Link>
                                            </div>

                                            <div className='col-lg-12'>
                                                <button className='btn btn-info py-3 w-100 log-btn'>Login </button>
                                                <p className='text-center mt-3'>Not a Member? <Link to="#" onClick={() => setIsLogin(false)}>Sign Up Now</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                </> : <>
                                    <div className='singUpform'>
                                        <div className='row py-5'>
                                            <div className='col-lg-12'>
                                                <input className='form-control py-3 mb-2' type='email' placeholder='Enter Your Email' />
                                            </div>
                                            <div className='col-lg-12'>
                                                <input className='form-control py-3 mb-2' type='password' placeholder='Enter Your Password' />
                                            </div>
                                            <div className='col-lg-12'>
                                                <input className='form-control py-3 mb-2' type='password' placeholder='Enter your Confirm Password' />
                                            </div>
                                            <div className='col-lg-12'>
                                                <button className='btn py-3 btn-info w-100 mt-4 log-btn'>Sign Up </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                }


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
