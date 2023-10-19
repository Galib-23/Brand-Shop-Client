import { useLoaderData } from "react-router-dom";

const Sony = () => {

    const products = useLoaderData();
    const sonyProducts = products.filter(product => product.brandName === 'Sony');

    return (
        <div>
            <h2>Length: {sonyProducts.length}</h2>
        </div>
    );
};

export default Sony;