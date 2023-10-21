import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import no from '../../assets/no.png';
const Apple = () => {

    const products = useLoaderData();
    const appleProducts = products.filter(product => product.brandName === 'Apple');
    if(appleProducts.length == 0){
        return <div className="flex flex-col  items-center justify-center min-h-screen">
        <h2 className="text-4xl font-extrabold text-red-700 mb-8">Oops..</h2>
        <p className="text-xl font-semibold mb-8">No Products available of this brand</p>
        <img className="w-56 md:w-96" src={no} alt="" />
    </div>
    }
    return (
        <div className="mt-16">
            <h2 className="text-4xl font-extrabold text-center">APPLE PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto mt-16">
            {
                appleProducts.map(apple => <ProductCard key={apple._id} product={apple}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Apple;