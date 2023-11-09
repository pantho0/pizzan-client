import { Link } from "react-router-dom";


const AddedFoodTable = ({ food }) => {
    const { _id,foodImage, foodName, price, foodOrigin, foodCategory } = food;

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
                        <Link to={'/update'}><button className="btn btn-ghost btn-xs">Update</button></Link>
                    </th>
                </tr>
            </tbody>
    );
};

export default AddedFoodTable;