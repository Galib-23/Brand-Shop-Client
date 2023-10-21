import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Google = () => {

    const products = useLoaderData();
    console.log(products);
    const googleProducts = products.filter(product => product.brandName === 'Google');
    if(googleProducts.length == 0){
        return <div>
            <h2>No products available</h2>
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