import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className='grid grid-cols-12 min-h-screen'>
            <div className='bg-red-300 col-span-2 flex flex-col py-3'>
            <NavLink to="profile/addedfoods"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#EB0029]" : ""
                    }>My Added Foods</NavLink>
            <NavLink to="profile/addnewfoods"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#EB0029]" : ""
                    }>Add New Foods</NavLink>
            <NavLink to="profile/myorders"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#EB0029]" : ""
                    }>My Orders</NavLink>
            </div>
            <div className='bg-green-400 col-span-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MyProfile;