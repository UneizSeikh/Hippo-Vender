import React from 'react';
import StepImage1 from '../assets/images/step1.svg';
import StepImage2 from '../assets/images/step2.svg';
import StepImage3 from '../assets/images/step3.svg';
import StepImage4 from '../assets/images/step4.svg';

const steps = [
    {
        number: '01',
        title: 'Register & Pay ₹1000',
        subtitle:
            'Unlock your vendor account and get access to Hippo Bazaar’s cashback ecosystem.',
        label: '01',
        BgImage: StepImage1,
        icon: 'fas fa-user-plus',
        labelBg: 'linear-gradient(90deg, #ff00d6 0.88%, #9b0082 101.52%)',
    },
    {
        number: '02',
        title: 'Add Business Info & KYC',
        subtitle:
            'Complete your profile and verify your identity for smooth payouts and trust-building.',
        label: '02',
        BgImage: StepImage3,
        icon: 'fas fa-id-card',
        labelBg: 'linear-gradient(90deg, #abd571 0.88%, #63a539 101.52%)',
    },
    {
        number: '03',
        title: 'Approve Bills & Give Cashback',
        subtitle:
            'Quickly verify submitted bills and reward customers with instant cashback.',
        label: '03',
        BgImage: StepImage2,
        icon: 'fas fa-rupee-sign',
        labelBg: 'linear-gradient(90deg, #f8a84b 0.88%, #e76c00 101.52%)',
    },
    {
        number: '04',
        title: 'Track Performance & Earnings',
        subtitle:
            'In dashboard monitor your cashback activity, customer engagement, and total earnings in real-time.',
        label: '04',
        BgImage: StepImage4,
        icon: 'fas fa-chart-line',
        labelBg: 'linear-gradient(90deg, #733f6f 0.88%, #c6777c 101.52%)',
    },
];


const StepProcess = () => {
    return (
        <div className="step_pro_wrp py-5">
            <div className="side_space pt-4">
                <h2 className="section-title">Join Hippo Bazaar in 4 Simple Steps</h2>
                <p className="section-subtitle mb-0">
                    Become a Hippo Bazaar vendor and start earning instantly.
                    <br />
                    From registration to cashback approval, our onboarding process
                    <br />
                    is quick, transparent, and designed for your success.
                </p>

                <div className="steps_row">
                    {steps.map((step, index) => (
                        <div className="steps_card_wrp" key={index}>
                            <div
                                className="step_img_wrp position-relative text-center mx-auto"
                            >
                                <img className='img-fluid' src={step.BgImage} alt={index} />
                                <div className="img_conte position-absolute">
                                    <div className="mini_icon">
                                        <i className={step.icon} style={{ background: step.labelBg }}></i>
                                    </div>
                                    <div className="label" style={{ background: step.labelBg }}>{step.label}</div>
                                </div>
                            </div>

                            <div className="step_content">
                                <h4>{step.title}</h4>
                                <p>{step.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StepProcess;