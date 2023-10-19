import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const details = useLoaderData();

    const handleAddToCart = () =>{

    }

    return (
        <div>
            <div className="md:container mx-auto mt-8 flex flex-col items-center justify-center">
                <img className="h-96" src={details.image} />
                <h2 className="text-4xl font-bold mt-3">{details.productName}</h2>
                <p className="text-xl mt-3 font-semibold">Price: {details.price}</p>
                <p className="text-lg mt-3">{details.description}</p>
                    <button onClick={handleAddToCart} className="btn btn-primary mt-3 text-white bg-blue-400">Add To Cart</button>
            </div>
        </div>
    );
};

export default Details;