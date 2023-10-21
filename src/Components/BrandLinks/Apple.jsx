import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Apple = () => {

    const products = useLoaderData();
    const appleProducts = products.filter(product => product.brandName === 'Apple');
    if(appleProducts.length == 0){
        return <div>
            <h2>No products available</h2>
        </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                appleProducts.map(apple => <ProductCard key={apple._id} product={apple}></ProductCard>)
            }
        </div>
    );
};

export default Apple;