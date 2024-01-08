import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import no from '../../assets/no.png';
const Amd = () => {

    const products = useLoaderData();
    const amdProducts = products.filter(product => product.brandName === 'Amd');
    if(amdProducts.length == 0){
        return <div className="flex flex-col  items-center justify-center min-h-screen">
            <h2 className="text-4xl font-extrabold text-red-700 mb-8">Oops..</h2>
            <p className="text-xl font-semibold mb-8">No Products available of this brand</p>
            <img className="w-56 md:w-96" src={no} alt="" />
        </div>
    }
    return (
        <div className="mt-16">
            <h2 className="text-4xl font-extrabold text-center">AMD PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-28 mt-16">
            {
                amdProducts.map(amd=> <ProductCard key={amd._id} product={amd}></ProductCard>)
            }
            </div>
            
        </div>
    );
};

export default Amd;