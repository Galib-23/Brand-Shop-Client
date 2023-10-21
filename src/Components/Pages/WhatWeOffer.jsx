import quickservice from '../../assets/quickservice.png';
import onlineservice from '../../assets/onlinesupport.png';
import renewals from '../../assets/productrenewals.png';
import others from '../../assets/others.png';
const WhatWeOffer = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col">
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold text-center">What we offer ?</h1>
                        <p className="py-6 text-center">We are very concerned with the customers satisfaction. Our main target is to satisfy our customers. For that we have a team consisting of a lot of members working hard to provide the best services</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                        {/* Card */}
                        <div className="card h-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={quickservice} alt="Shoes" className="rounded-xl w-16" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Quick Servicing</h2>
                                <p>We offer an on time service and very well service with trained engineers.</p>
                                <div className="card-actions">
                                </div>
                            </div>
                        </div>

                        {/* Card 2*/}
                        <div className="card h-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={onlineservice} alt="Shoes" className="rounded-xl w-16" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Online Support</h2>
                                <p>We are always ready with 24 hrs online support teams for any queries</p>
                                <div className="card-actions">
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="card h-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={renewals} alt="Shoes" className="rounded-xl w-16" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title mt-4">Product Renewals</h2>
                                <p>We provide very unique product renewal services for any damaged products.</p>
                                <div className="card-actions">
                                </div>
                            </div>
                        </div>
                        {/* Card 4*/}
                        <div className="card h-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={others} alt="Shoes" className="rounded-xl w-16" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Other Services</h2>
                                <p>We are enriched with vast amount of online and offline service programs .</p>
                                <div className="card-actions">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;