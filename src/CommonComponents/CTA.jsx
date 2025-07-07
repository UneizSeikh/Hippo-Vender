import React from 'react';
import AppStore from '../assets/images/appstore.png';
import GooglePlay from '../assets/images/googleplay.png';

const CTASection = () => {
    return (
        <>
            <div className="cta_section">
                <div className="cta_wrp">
                    <div class="contact-box position-relative">
                        <div class="content">
                            <h2>Ready to Grow Your Business with Hippo Bazaar?</h2>
                            <p>
                                Join our cashback-powered vendor network and start engaging customers, approving bills, and tracking performance all from one smart dashboard.
                            </p>
                            <div class="buttons">
                                <img src={AppStore} alt="App store" />
                                <img src={GooglePlay} alt="Google store" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTASection
