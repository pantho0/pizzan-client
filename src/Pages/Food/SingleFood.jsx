import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food = useLoaderData();
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
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Made By : {madeBy}
                    </p>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Origin : {foodOrigin}
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Available Quantity : {availableQuantity}
                    </p>
                    </div>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button
                        class="block w-full select-none rounded-lg bg-[#010F1C] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleFood;

