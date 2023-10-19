import apple from '../assets/apple.png';
import samsung from '../assets/samsung.jpg';
import sony from '../assets/sony.jpg';
import google from '../assets/google.jpeg';
import intel from '../assets/intel.jpg';
import amd from '../assets/amd.jpg';
import { Link } from 'react-router-dom';
const BrandNames = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:container mx-auto'>
            <Link to='/apple'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={apple} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Apple</h2>
                    </div>
                </div>
            </Link>
            <Link to='/samsung'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={samsung} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Samsung</h2>
                    </div>
                </div>
            </Link>
            <Link to='/sony'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={sony} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sony</h2>
                    </div>
                </div>
            </Link>
            <Link to='/google'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={google} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Google</h2>
                    </div>
                </div>
            </Link>
            <Link to='/intel'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={intel} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Intel</h2>
                    </div>
                </div>
            </Link>
            <Link to='/amd'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={amd} alt="Shoes" className="rounded-xl h-56 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">AMD</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandNames;