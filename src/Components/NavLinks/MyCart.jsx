import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
    const user = useContext(AuthContext);
    const {email} = user;
    const loadedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(loadedCartProducts);
    const myCartProducts = cartProducts.filter(product =>product.email == email);
    console.log(myCartProducts);
    return (
        <div className="md:container mx-auto">
            <h2 className="text-4xl font-extrabold">My Cart Items</h2>
            {
                myCartProducts.map(mycart => <MyCartCard key={mycart._id} mycart={mycart}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                ></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;