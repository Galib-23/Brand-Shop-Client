import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
    const user = useContext(AuthContext);
    const {email} = user;
    const cartProducts = useLoaderData();
    const myCartProducts = cartProducts.filter(product =>product.email == email);
    console.log(myCartProducts);
    return (
        <div>
            <h2>This is my cart</h2>
        </div>
    );
};

export default MyCart;