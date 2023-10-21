import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyCartCard from "./MyCartCard";
import Navbar from "../Navbar";
import bg from '../../assets/background.jpg';
import no from '../../assets/no.png';
const MyCart = () => {
    const user = useContext(AuthContext);
    const {email} = user;
    const loadedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(loadedCartProducts);
    const myCartProducts = cartProducts.filter(product =>product.email == email);
    console.log(myCartProducts);
    if(cartProducts.length == 0){
       return <div className="flex flex-col  items-center justify-center min-h-screen">
            <h2 className="text-4xl font-extrabold text-red-700 mb-8">Oops..</h2>
            <p className="text-xl font-semibold mb-8">No Products available of this brand</p>
            <img className="w-56 md:w-96" src={no} alt="" />
        </div>
    }
    return (
        <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', }}
        >
            <Navbar></Navbar>
            <div className="md:container mx-auto">
            <h2 className="text-4xl font-extrabold text-white py-4">My Cart Items</h2>
            {
                myCartProducts.map(mycart => <MyCartCard key={mycart._id} mycart={mycart}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                ></MyCartCard>)
            }
            </div>
            
        </div>
    );
};

export default MyCart;