import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const details = useLoaderData();
    const { image, productName, price, brandName} = details;

    const handleAddToCart = () =>{
        const cart = {userEmail, image, productName, price, brandName};
        fetch('https://nano-nest-server.vercel.app/carts' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred',
                text: `Fetching problem. This may be already added in cart !`
              })
        })
    }

    return (
        <div>
            <div className="md:container mx-auto mt-8 flex flex-col items-center justify-center">
                <img className="h-96" src={image} />
                <h2 className="text-4xl font-bold mt-3">{productName}</h2>
                <p className="text-xl mt-3 font-semibold">Price: {price}</p>
                <p className="text-lg mt-3">{details.description}</p>
                    <button onClick={handleAddToCart} className="btn btn-primary mt-3 text-white bg-blue-400">Add To Cart</button>
            </div>
        </div>
    );
};

export default Details;