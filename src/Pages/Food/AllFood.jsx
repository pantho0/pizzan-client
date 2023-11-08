import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodsCard from './FoodsCard';
import { useLoaderData } from 'react-router-dom';

const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState([])
    const { count } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)

 
    const numOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numOfPages).keys()]



    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    const handleItemPerPage = (e) => {
        const val = parseFloat(e.target.value)
        console.log(val);
        setItemsPerPage(val)
        setCurrentPage(1)
    }


    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/foods?page=${currentPage}&limit=${itemsPerPage}`)
        .then(res => {
            setIsLoading(true)
            setFoods(res.data)
            setIsLoading(false)

        })
        .catch(error => {
            console.log(error);
        })
    },[foods])

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
                    {
                        !isLoading ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                                {/* Foods Card */}
                                {foods.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)}
                            </div>
                            :
                            <div className='flex justify-center items-center min-h-screen'>
                                <progress className="progress w-56"></progress>
                            </div>
                    }

                </div>
                {/* Pagination */}
                <div className='mb-5 flex justify-center'>
                    <div className="join border border-red-400 p-2">
                        <p>current page : {currentPage}</p>
                        <button onClick={handlePrev} className="join-item btn">«</button>
                        {
                            pages.map(page => {
                                return(
                                    <button
                                    onClick={()=> setCurrentPage(page+1)}
                                    className="join-item btn">
                                    {page+1}
                                </button>
                                )
                            })
                        }
                        <button onClick={handleNext} className="join-item btn">»</button>
                        
                        <select value={itemsPerPage} onChange={handleItemPerPage}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;