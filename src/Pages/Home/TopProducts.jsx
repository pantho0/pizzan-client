import React from 'react';
import { Link } from 'react-router-dom';

const TopProducts = ({food}) => {
    console.log(food);
    const { _id, foodName, foodImage, foodCategory, price, madeBy, foodOrigin, description, availableQuantity, orderCount } = food;
    return (
        <div className='min-h-screen'>
            <div className='flex justify-center items-center'>
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={foodImage}
                        class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {foodName}
                        </p>
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {price}
                        </p>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Category : {foodCategory}
                    </p>
                    </div>
                </div>
                <div class="p-6 pt-0">
                <Link to={`/food/${_id}`}>
                <button
                    class="block w-full select-none rounded-lg bg-[#010F1C] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white  hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Details
                </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopProducts;