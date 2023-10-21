
import BrandNames from "../BrandNames";
import Footer from "../Footer";
import Header from "../Header";
import DealOftheDay from "../Pages/DealOftheDay";
import WhatWeOffer from "../Pages/WhatWeOffer";
import bg from '../../assets/background.jpg';
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div className=""
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', }}
        >
            <Navbar></Navbar>
            <Header></Header>
            <div className="md:container mx-auto">
                <h2 className="text-4xl font-bold text-center mt-12 mb-10 text-white">Popular Brands</h2>
                <BrandNames></BrandNames>
                <DealOftheDay></DealOftheDay>
                <WhatWeOffer></WhatWeOffer>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;