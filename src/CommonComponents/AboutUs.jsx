import React from 'react'
import SideImage from '../assets/images/vendersimage.png'


const AboutUs = () => {
    return (
        <>
            <div className="about_wrp">
                <div className="side_space">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="img_wrp_about">
                                <img src={SideImage} alt="about image" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_content_wrp">
                                <h2 className="section-title">START YOUR VENDOR JOURNEY  WITH HIPPO BAZAAR</h2>
                                <p className="section-subtitle mb-0">
                                    Grow your business with instant cashback tools, real-time analytics, and smart bill tracking. Whether you're a café, grocery store, or salon — our vendor ecosystem is built to help you earn more and engage better.
                                </p>
                                <ul className="section-subtitle">
                                    <li>Real-time dashboard to track earnings and customer engagement</li>
                                    <li>Approve bills and instantly reward your loyal customers</li>
                                    <li>Recharge your wallet and never miss a cashback opportunity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
