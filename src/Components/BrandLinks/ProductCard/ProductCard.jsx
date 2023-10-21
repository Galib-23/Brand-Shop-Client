import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const ProductCard = ({product}) => {
    
    console.log(product);
    const {_id, image, brandName, productName, productType, price, rating} = product;
    console.log(`brand nameee isss : ${brandName}`)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-48" src={image}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Type: {productType}</p>
                    <p>Price: {price}</p>
                    <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            starDimension="30px"
                            starSpacing="3px"
                            numberOfStars={5}
                            name="rating"
                        />
                    <div className="card-actions flex flex-row justify-evenly">
                        <Link to={`/details/${_id}`} >
                        <button className="btn btn-primary bg-blue-500 border-none text-white mt-2">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-primary bg-yellow-300 border-none text-black mt-2">UPDATE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;