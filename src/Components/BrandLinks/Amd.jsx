import { useLoaderData } from "react-router-dom";

const Amd = () => {

    const products = useLoaderData();
    const amdProducts = products.filter(product => product.brandName === 'Amd');

    return (
        <div>
            <h2>Length: {amdProducts.length}</h2>
        </div>
    );
};

export default Amd;