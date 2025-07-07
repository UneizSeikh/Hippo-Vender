
const Header = () => {
    return (
        <>
            <header className="header side_space">
                <div className="logo">Hippo Bazar</div>
                <nav className="nav">
                    <a href="#how-it-works">How it Works</a>
                    <a href="#services">Services</a>
                    <a href="#testimonials">Testimonials</a>
                </nav>
                <div className="right_wrp d-flex align-items-center">
                    <div className="search-auth">
                        <button className="link-btn regester">Regester</button>
                        <button className="link-btn">Log In</button>
                    </div>
                    <div className="profile_Sec d-flex align-items-center">
                        <div className="profile_img">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="profile_dea">
                            <div>Hi, User</div>
                            <div>My Account</div>
                        </div>
                    </div>
                </div>

            </header>

            <section className="banner">
                <div className="banner-content">
                    <h1>Grow Your Business with Cashback-Driven Customer Loyalty</h1>
                    <p>
                        Hippo Bazaar connects you with a global audience, making it easier
                        to sell your products worldwide. Join 10,000+ local vendors earning more with verified user bills & automated cashback
                    </p>
                    <div className="cta-buttons">
                        <button className="start-selling">Start Selling Today</button>
                        <button className="learn-more">Learn More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
