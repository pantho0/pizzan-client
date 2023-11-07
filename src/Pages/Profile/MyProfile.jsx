import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className='grid grid-cols-12 min-h-screen'>
            <div className='bg-[#010F1C] border-t-2 col-span-2 flex flex-col py-3'>
            <NavLink to="profile/addedfoods"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white bg-[#EB0029] p-4" : "bg-[#010F1C] p-4 text-white border"
                    }>My Added Foods</NavLink>
            <NavLink to="profile/addnewfoods"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white bg-[#EB0029] p-4" : "bg-[#010F1C] p-4 text-white border"
                    }>Add New Foods</NavLink>
            <NavLink to="profile/myorders"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white bg-[#EB0029] p-4" : "bg-[#010F1C] p-4 text-white border"
                    }>My Orders</NavLink>
            </div>
            <div className='bg-base-200 col-span-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MyProfile;