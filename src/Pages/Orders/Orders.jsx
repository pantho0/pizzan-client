import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import OrdersTable from './OrdersTable';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/api/v1/orders?email=${user?.email}`

    useEffect(() => {
        axios.get(url, {withCredentials:true})
            .then(res => {
                setOrders(res.data)
            })
    }, [orders])

    const handleDeleteOrder = (id) =>{
        axios.delete(`http://localhost:5000/api/v1/orders/${id}`)
        .then(res => {
            console.log(res.data);
            useEffect(() => {
                axios.get(url)
                    .then(res => {
                        setOrders(res.data)
                    })
            }, [orders])
        })
    }
    return (
        <div>
            <div className='text-center m-8'><h2 className='font-bold text-4xl'>My Orders</h2></div>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Food Origin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                orders.map(order => <OrdersTable key={order._id} order={order} handleDeleteOrder={handleDeleteOrder}></OrdersTable>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;