
import BrandNames from "../BrandNames";
import Header from "../Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-4xl font-bold text-center mt-12 mb-10">Popular Brands</h2>
            <BrandNames></BrandNames>
        </div>
    );
};

export default Home;