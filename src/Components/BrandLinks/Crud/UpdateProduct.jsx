import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();

    const { productName, brandName, productType, price, description, image, rating } = product;


    const [upbrandName, setUpbrandName] = useState('');

    const handleBrandName = (event) => {
      setUpbrandName(event.target.value);
    };

    const [uprating, setUpRating] = useState(rating);
    const handleRatingChange = (newRating) => {
        setUpRating(newRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        const newProduct = { productName, brandName, productType, price, description, image, rating };

        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product Has Been Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }




    return (
        <div className="md:container mx-auto">
            <h2 className="text-4xl text-center font-extrabold my-12">Update: {productName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name"
                                name='productName'
                                defaultValue={productName}
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Type"
                                name='productType'
                                defaultValue={productType}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price"
                                name='price'
                                defaultValue={price}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description"
                            defaultValue={description}
                                name='description'
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image URL"
                            name='image'
                            defaultValue={image}
                            className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-4 items-center'>
                <div className="form-control">
                    <div className='flex items-center'>
                        <span className="label-text text-center text-base mr-4">Rating: </span>
                        <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name="rating"
                            starDimension="30px"
                            starSpacing="3px"
                        />
                    </div>
                </div>
                <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered" onChange={handleBrandName} value={brandName}>
                                <option selected>Pick category</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Sony</option>
                                <option>Google</option>
                                <option>Intel</option>
                                <option>Amd</option>
                            </select>
                        </div>
                </div>
                </div>
                <button className="btn btn-primary w-full mt-7 text-white" type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;