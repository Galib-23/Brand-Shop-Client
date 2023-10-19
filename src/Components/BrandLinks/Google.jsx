import { useLoaderData } from "react-router-dom";

const Google = () => {

    const products = useLoaderData();
    const googleProducts = products.filter(product => product.brandName === 'Google');

    return (
        <div>
            <h2>Length: {googleProducts.length}</h2>
        </div>
    );
};

export default Google;