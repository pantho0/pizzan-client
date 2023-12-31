import React from 'react';

const OrdersTable = ({ order, handleDeleteOrder }) => {
    const { _id,foodImage, foodName, price, foodOrigin, foodCategory } = order;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={foodImage} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{foodName}</div>
                            <div className="text-sm opacity-50">Category:{foodCategory}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {price}
                </td>
                <td>{foodOrigin}</td>
                <th>
                    <button onClick={()=>handleDeleteOrder(_id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default OrdersTable;