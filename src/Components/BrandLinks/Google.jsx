import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Google = () => {

    const products = useLoaderData();
    const googleProducts = products.filter(product => product.brandName === 'Google');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            {
                googleProducts.map(google=> <ProductCard key={google._id} product={google}></ProductCard>)
            }
        </div>
    );
};

export default Google;