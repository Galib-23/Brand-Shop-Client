import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import no from '../../assets/no.png';

const Google = () => {

    const products = useLoaderData();
    console.log(products);
    const googleProducts = products.filter(product => product.brandName === 'Google');
    if(googleProducts.length == 0){
        return <div className="flex flex-col  items-center justify-center min-h-screen">
        <h2 className="text-4xl font-extrabold text-red-700 mb-8">Oops..</h2>
        <p className="text-xl font-semibold mb-8">No Products available of this brand</p>
        <img className="w-56 md:w-96" src={no} alt="" />
    </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                googleProducts.map(google=> <ProductCard key={google._id} product={google}></ProductCard>)
            }
        </div>
    );
};

export default Google;