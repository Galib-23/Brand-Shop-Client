import { useLoaderData } from "react-router-dom";

const Intel = () => {

    const products = useLoaderData();
    const intelProducts = products.filter(product => product.brandName === 'Intel');

    return (
        <div>
            <h2>Length: {intelProducts.length}</h2>
        </div>
    );
};

export default Intel;