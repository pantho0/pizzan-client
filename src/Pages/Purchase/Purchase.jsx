import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";


const Purchase = () => {
    const { user } = useContext(AuthContext)
    const product = useLoaderData();
    const { _id, foodName, foodImage, foodCategory, price, madeBy, foodOrigin, description, availableQuantity, orderCount } = product;
    const orderdedItem = {foodName, foodImage, foodCategory, price, madeBy, foodOrigin, description, availableQuantity, orderCount}
    const mergedOrder = {...user, ...orderdedItem}

    const handleConfirmOrder = () => {
       axios.post("https://pizzan-server.vercel.app/api/v1/confirmPurchase", mergedOrder)
       .then(res =>{
        console.log(res.data);
       })
       .catch(error =>{
        console.log(error);
       })
    }

    return (
        <div>
            <h2 className="text-center text-4xl mt-10 mb-10">Purchase Information </h2>
            <div className="hero">
                <form className="card-body">
                    {/* Food Name & Price */}
                    <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" defaultValue={foodName} placeholder="Food Name" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} placeholder="price" className="input input-bordered" required disabled />
                        </div>
                    </div>
                    {/* Buyer Name & email */}
                    <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName || user?.email} placeholder="Buyer Name" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required disabled />
                        </div>
                    </div>
                    {/* Quantity & Date */}
                    <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-center mb-6">
                <button onClick={handleConfirmOrder} className="btn btn-primary bg-[#010F1C] hover:bg-[#EB0029] border-none">Confirm Order</button>
            </div>
        </div>
    );
};

export default Purchase;