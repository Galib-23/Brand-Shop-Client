import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Sony = () => {

    const products = useLoaderData();
    const sonyProducts = products.filter(product => product.brandName === 'Sony');
    if(sonyProducts.length == 0){
        return <div>
            <h2>No products available</h2>
        </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                sonyProducts.map(sony=> <ProductCard key={sony._id} product={sony}></ProductCard>)
            }
        </div>
    );
};

export default Sony;