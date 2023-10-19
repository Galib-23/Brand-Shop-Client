import { useLoaderData } from "react-router-dom";

const Samsung = () => {

    const products = useLoaderData();
    const samsungProducts = products.filter(product => product.brandName === 'Samsung');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            <h2>Length: {samsungProducts.length}</h2>
        </div>
    );
};

export default Samsung;