
const MyCartCard = ({ mycart }) => {
    const { image, productName, price, brandName } = mycart;
    return (
        <div>
            <div className="card md:max-w-md mb-4 card-side bg-base-100 shadow-xl">
                <figure><img className="h-44" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;