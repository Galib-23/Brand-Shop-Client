import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Samsung = () => {

    const products = useLoaderData();
    const samsungProducts = products.filter(product => product.brandName === 'Samsung');
    if(samsungProducts.length == 0){
        return <div>
            <h2>No products available</h2>
        </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                samsungProducts.map(samsung=> <ProductCard key={samsung._id} product={samsung}></ProductCard>)
            }
        </div>
    );
};

export default Samsung;