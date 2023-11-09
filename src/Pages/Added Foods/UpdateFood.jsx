import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateFood = () => {
    const { user } = useContext(AuthContext)
    const [food, setFood] = useState([])
    const { id } = useParams()
    const { _id, addedBy, availableQuantity, description, foodCategory, foodImage, foodName, foodOrigin, madeBy, orderCount, price } = food;
    useEffect(() => {
        axios.get(`http://localhost:5000/update/${id}`)
            .then(res => {
                console.log(res.data);
                setFood(res.data)
            })
    }, [])

    const handleUpdate = e => {
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

        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });


    }



    return (
        <div>
            <h2 className='text-4xl bg-base-200 text-center pt-10'>Update Your Food Here</h2>
            <p className='text-center text-[12px] bg-base-200'>Please Wait To Load Food Data In Table By Default</p>
            {/* Add Form */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full shadow bg-base-200">
                            <form className="card-body" onSubmit={handleUpdate}>
                                {/* food name */}
                                <div className='flex gap-2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={foodName} placeholder="Food Name (EX:Potato)" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Img URL</span>
                                        </label>
                                        <input type="text" name='image' defaultValue={foodImage} placeholder="URL ONLY" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* food cat & price */}
                                <div className='flex gap-2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Category</span>
                                        </label>
                                        <input type="text" defaultValue={foodCategory} name='category' placeholder="Category" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* food made & origin */}
                                <div className='flex gap-2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Made By</span>
                                        </label>
                                        <input type="text" defaultValue={madeBy} name='made' placeholder="Made By" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Origin(country)</span>
                                        </label>
                                        <input type="text" defaultValue={foodOrigin} name='country' placeholder="Country" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* food desc & quantity */}
                                <div className='flex gap-2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" defaultValue={description} name='description' placeholder="Description" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="tex" defaultValue={availableQuantity} name='quantity' placeholder="Quantity" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* food order & addedby */}
                                <div className='flex gap-2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Order Count</span>
                                        </label>
                                        <input type="text" name='order' placeholder="Order Count" className="input input-bordered" required defaultValue={orderCount} disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Added By</span>
                                        </label>
                                        <input type="email" name='email' defaultValue={addedBy} placeholder="Added By" className="input input-bordered" required disabled />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-[#010F1C] border-none hover:bg-[#EB0029]">Update Food</button>
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