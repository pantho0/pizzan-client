import axios from 'axios';
import React, { useState } from 'react';
import FoodsCard from './FoodsCard';

const AllFood = () => {
    const [foods, setFoods]= useState([])
    const [isLoading, setIsLoading] = useState(true)

    axios.get('http://localhost:5000/api/v1/foods')
        .then(res => {
            setFoods(res.data)
            setIsLoading(false)

        })
        .catch(error => {
            {}
        })
    return (
        <div className='max-w-7xl mx-auto'>
            {/* Search Food Codes */}
            <div>
                <div className="form-control mt-10 mb-10">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        {/* Foods Card */}
                        {   !isLoading ? foods.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                            : 
                            <div>Loading</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;