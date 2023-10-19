import { useLoaderData } from "react-router-dom";

const Apple = () => {

    const products = useLoaderData();
    const appleProducts = products.filter(product => product.brandName === 'Apple');

    return (
        <div>
            <h2>Length: {appleProducts.length}</h2>
        </div>
    );
};

export default Apple;