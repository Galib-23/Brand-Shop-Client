import { useLoaderData } from "react-router-dom";

const Intel = () => {

    const products = useLoaderData();
    const intelProducts = products.filter(product => product.brandName === 'Intel');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            <h2>Length: {intelProducts.length}</h2>
        </div>
    );
};

export default Intel;