import Category1 from "../assets/images/categ_1.jpg"

const benefits = [
    {
        icon: Category1,
        title: 'Cashback-Driven Retention',
        description: 'Encourage repeat purchases and build customer loyalty by offering instant cashback on every bill.',
    },
    {
        icon: Category1,
        title: 'Smart Dashboard & Insights',
        description: 'Track earnings, cashback activity, and customer behavior trends in an intelligent, easy-to-use dashboard.',
    },
    {
        icon: Category1,
        title: 'Real-Time Transaction Alerts',
        description: 'Get notified instantly when a customer uploads a bill, approves a cashback, or interacts with your store.',
    },
    {
        icon: Category1,
        title: 'Leaderboard Rankings',
        description: 'Join the race to the top! See how your shop performs among vendors and earn recognition on our leaderboard.',
    },
    {
        icon: Category1,
        title: 'Advanced Business Controls',
        description: 'Manage your wallet, adjust cashback settings, and fine-tune your business experience — all in one place.',
    },
    {
        icon: Category1,
        title: 'Easy Bill Management',
        description: 'Access, review, and verify customer-submitted bills effortlessly using our centralized bill tracking system.',
    },
];

const VendorBenefits = () => {
    return (
        <section className="vendor-benefits-section">
            <div className="side_space">
                <h2 className="section-title">Vendor Benefits</h2>
                <p className="section-subtitle">Power up your business with real-time tools, <br />insights, and growth incentives.</p>
            </div>
            <div className="side_space">
                <div className="benefits-grid px-lg-5">
                    {benefits.map((item, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="benefit-icon">
                                <img src={item.icon} alt="benefits" />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <span className="benefits-tag">Benefits</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VendorBenefits;
