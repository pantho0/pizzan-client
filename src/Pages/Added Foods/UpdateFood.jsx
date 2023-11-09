import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';

const UpdateFood = () => {
    const {user} = useContext(AuthContext)
    const orderCount = 0;

    const handleAddForm = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const foodImage = form.image.value;
        const foodCategory = form.category.value;
        const price = parseFloat(form.price.value);
        const madeBy = form.made.value;
        const foodOrigin = form.country.value;
        const description = form.description.value;
        const availableQuantity = parseFloat(form.quantity.value);
        const orderCount = parseFloat(form.order.value);
        const addedBy = form.email.value;

        const item = {
            foodName, foodImage, foodCategory, price, madeBy, foodOrigin, 
            description, availableQuantity, orderCount, addedBy
        }
        console.log(item);

        axios.post("http://localhost:5000/api/v1/addFood", item)
        .then(res => {
            console.log(res.data);
            
        })
        .catch(function(error){
            console.log(error);
        } )


    }

    return (
        <div>
            <h2>Update Your New Food Here</h2>
            {/* Add Form */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full shadow bg-base-200">
                            <form className="card-body" onSubmit={handleAddForm}>
                                {/* food name */}
                                <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Food Name (EX:Potato)" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Img URL</span>
                                    </label>
                                    <input type="text" name='image' placeholder="URL ONLY" className="input input-bordered" required />
                                </div>
                                </div>
                                {/* food cat & price */}
                                <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Category</span>
                                    </label>
                                    <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                                </div>
                                </div>
                                {/* food made & origin */}
                                <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Made By</span>
                                    </label>
                                    <input type="text" name='made' placeholder="Made By" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin(country)</span>
                                    </label>
                                    <input type="text" name='country' placeholder="Country" className="input input-bordered" required />
                                </div>
                                </div>
                                {/* food desc & quantity */}
                                <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="tex" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                                </div>
                                </div>
                                {/* food order & addedby */}
                                <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order Count</span>
                                    </label>
                                    <input type="text" name='order' placeholder="Order Count" className="input input-bordered" required defaultValue={orderCount} disabled/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Added By</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="Added By" className="input input-bordered" required disabled/>
                                </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-[#010F1C] border-none hover:bg-[#EB0029]">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;