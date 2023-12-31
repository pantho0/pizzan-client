import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import AddedFoodTable from "./AddedFoodTable";


const AddedFoods = () => {
    const {user} = useContext(AuthContext)
    const [addedFoods, setAddedFood] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const url = `https://pizzan-server.vercel.app/api/v1/foods?addedBy=${user?.email}`

    useEffect(()=>{
        axios.get(url)
        .then(res => {
            setAddedFood(res.data)
            setIsloading(false)
        })
    },[addedFoods])


    return (
        <div>
            <div className='text-center m-8'><h2 className='font-bold text-4xl'>My Added Foods </h2></div>
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
                                isLoading ? isLoading
                                :
                                addedFoods.map(food => <AddedFoodTable key={food._id} food={food}></AddedFoodTable>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedFoods;