import iphone from '../../assets/iphone.jpg'
const DealOftheDay = () => {
    return (
        <div className='text-white'>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col">
                    <div className=''>
                        <h1 className="text-5xl font-bold text-center">Deal of the Day!</h1>
                        <p className="py-6 text-center">This is your chance to own the latest iPhone 15 at an unbeatable price. Do not miss out on this incredible opportunity to experience cutting-edge technology and elevate your mobile experience. If this is your first purchase just sign up and get the bonus.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={iphone} className="w-44 md:w-full md:max-w-sm rounded-lg shadow-2xl" />
                        <button className="btn btn-primary md:w-1/2 mt-10 text-white bg-[#09999e] border-none">Get 20% Off</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOftheDay;