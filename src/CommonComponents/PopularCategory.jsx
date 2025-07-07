import React from 'react';
import Slider from 'react-slick';
// import Category1 from "../assets/images/categ_1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const deals = [
    {
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        title: "Up to 50% OFF",
        subtitle: "The Best In Town | Free Delivery",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        title: "Big Offer Pizzaholic",
        subtitle: "Buy 1 Get 1 Free",
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        title: "Buy 1 Get 1",
        subtitle: "Mocktails | Juice | Shake",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        title: "Up to 15% OFF",
        subtitle: "Non Veg | Free Delivery",
    },
    {
        image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Cool Dessert Offer",
        subtitle: "Buy 2 Scoops, Get 1 Free",
    },
     {
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        title: "Buy 1 Get 1",
        subtitle: "Mocktails | Juice | Shake",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        title: "Up to 15% OFF",
        subtitle: "Non Veg | Free Delivery",
    },
    {
        image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Cool Dessert Offer",
        subtitle: "Buy 2 Scoops, Get 1 Free",
    },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next" onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </div>
    );
};


const PopularCategories = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="popular-section side_space">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h2 className="section-title">Popular Categories</h2>
                    <p className="section-subtitle">Take a benefit from our latest offers.</p>
                </div>
            </div>

            <Slider {...settings}>
                {deals.map((deal, index) => (
                    <div key={index} className="deal-card">
                        <img src={deal.image} alt={deal.title} />
                        <div className="deal-info">
                            <h5>{deal.title}</h5>
                            <p>{deal.subtitle}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default PopularCategories;