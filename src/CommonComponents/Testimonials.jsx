import React, { useState } from 'react';

const testimonials = [
    {
        name: 'Pragos Terr',
        title: 'Future Accountability Analyst',
        img: 'https://i.pravatar.cc/80?img=12',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sit amet feugiat.',
    },
    {
        name: 'Andres Prohaska',
        title: 'Principal Identity Officer',
        img: 'https://i.pravatar.cc/80?img=18',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sit amet feugiat.',
    },
    {
        name: 'Allison Wehner',
        title: 'International Optimization Specialist',
        img: 'https://i.pravatar.cc/80?img=16',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sit amet feugiat.',
    },
    {
        name: 'Jane Cooper',
        title: 'Customer Experience Manager',
        img: 'https://i.pravatar.cc/80?img=20',
        message: 'Nunc eleifend, nisl at cursus feugiat, sapien ligula blandit ipsum, non dignissim felis purus non justo.',
    },
    {
        name: 'John Smith',
        title: 'Vendor Relations Lead',
        img: 'https://i.pravatar.cc/80?img=32',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
];

const TestimonialSlider = () => {
    const [centerIndex, setCenterIndex] = useState(1);
    const [animationKey, setAnimationKey] = useState(0); // used to re-trigger animation

    const handleNext = () => {
        setCenterIndex((prev) => (prev + 1) % testimonials.length);
        setAnimationKey((prev) => prev + 1);
    };

    const handlePrev = () => {
        setCenterIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAnimationKey((prev) => prev + 1);
    };

    const getVisibleTestimonials = () => {
        const total = testimonials.length;
        const prev = (centerIndex - 1 + total) % total;
        const next = (centerIndex + 1) % total;
        return [testimonials[prev], testimonials[centerIndex], testimonials[next]];
    };

    const visible = getVisibleTestimonials();

    return (
        <section className="testimonial-section">
            <div className="row">
                <div className="col-lg-5 d-flex align-items-center">
                    <div className="testimonial-left pe-3">
                        <span className="quation">
                            <i className="fas fa-quote-left fs-1"></i>
                        </span>
                        <h2 className="section-title">
                            <span>What Our</span> <br /> Client Say?
                        </h2>
                        <p className="section-subtitle mb-0">
                            Thousands of vendors trust Hippo Bazaar to simplify billing, reward loyal customers,
                            and grow faster. Don’t just take our word for it — see what our partners are saying
                            about their journey with us.
                        </p>
                        <div className="slider-controls">
                            <button onClick={handlePrev}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button onClick={handleNext}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="testimonial-right">
                        {visible.map((item, i) => (
                            <div
                                key={`${animationKey}-${i}`} // changing key re-triggers animation
                                className={`testimonial-card animated-card ${i === 1 ? 'highlighted' : ''}`}
                            >
                                <div className="testi_img_wrp">
                                    <img src={item.img} alt={item.name} />
                                    <div className="social-icons">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </div>

                                <div className="testimonial-content">
                                    <h4>{item.name}</h4>
                                    <p className="position">{item.title}</p>
                                    <p>“{item.message}”</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;