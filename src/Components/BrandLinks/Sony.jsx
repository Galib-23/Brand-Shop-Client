import { useLoaderData } from "react-router-dom";

const Sony = () => {

    const products = useLoaderData();
    const sonyProducts = products.filter(product => product.brandName === 'Sony');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto">
            <h2>Length: {sonyProducts.length}</h2>
        </div>
    );
};

export default Sony;