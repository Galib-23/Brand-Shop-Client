import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Intel = () => {

    const products = useLoaderData();
    const intelProducts = products.filter(product => product.brandName === 'Intel');
    if(intelProducts.length == 0){
        return <div>
            <h2>No products available</h2>
        </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                intelProducts.map(intel=> <ProductCard key={intel._id} product={intel}></ProductCard>)
            }
        </div>
    );
};

export default Intel;