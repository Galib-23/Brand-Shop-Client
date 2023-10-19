import { Link } from 'react-router-dom';
import hero from '../assets/pngegg.png'

const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row mx-auto gap-7">
                <img src={hero} className="w-56 lg:w-96 rounded-lg" />
                <div className="lg:ml-14">
                    <h1 className="text-5xl font-bold">Welcome To NANO NEST!</h1>
                    <h1 className="text-2xl mt-3">Empowering Innovation, Connecting Technology</h1>
                    <p className="py-6">Join our electronic gadget community and embark on a journey of innovation and connectivity. </p>
                    <Link to="/login"><button className="btn btn-primary">Join Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;