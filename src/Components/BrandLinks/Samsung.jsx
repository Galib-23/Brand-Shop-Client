import { useLoaderData } from "react-router-dom";

const Samsung = () => {

    const products = useLoaderData();
    const samsungProducts = products.filter(product => product.brandName === 'Samsung');

    return (
        <div>
            <h2>Length: {samsungProducts.length}</h2>
        </div>
    );
};

export default Samsung;