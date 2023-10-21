import Swal from "sweetalert2";

const MyCartCard = ({ mycart }) => {
    const {_id, image, productName, price, brandName } = mycart;

    const handleDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )                  
                }
            })

            console.log("dleeted");
            }
          })
    }

    return (
        <div>
            <div className="card md:max-w-md mb-4 card-side bg-base-100 shadow-xl">
                <figure><img className="h-44" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-red-600 border-none text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;