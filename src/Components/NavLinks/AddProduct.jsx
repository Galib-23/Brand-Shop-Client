import { useState } from 'react';
import StarRatings from 'react-star-ratings';
const AddProduct = () => {

    const [brandName, setbrandName] = useState('');

    const handleBrandName = (event) => {
      setbrandName(event.target.value);
    };

    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
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
        })

    }

    return (
        <div className="md:container mx-auto">
            <h2 className="text-4xl text-center font-extrabold my-12">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name"
                                name='productName'
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
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description"
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
                            className="w-6 sm:w-6 md:w-10 lg:w-12"
                        />
                    </div>
                </div>
                <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered" onChange={handleBrandName} value={brandName}>
                                <option disabled selected>Pick category</option>
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
                <button className="btn btn-primary w-full mt-7 text-white" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;