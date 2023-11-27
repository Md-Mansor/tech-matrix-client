import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";
import { FaTrashAlt, FaUsers } from "react-icons/fa";



const Users = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })
    console.log(users);

    const handleDeleteUser = (user) => {
        axiosSecure.delete(`/users/${user._id}`)
            .then((res) => {
                if (res.data.deleteCount > 0) {
                    refetch();
                }
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <div>
            <h1>Total Users :{users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name ?? user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td><button className="btn btn-outline btn-md w-16 btn-error"><FaUsers></FaUsers></button></td>
                                    <td><button onClick={() => handleDeleteUser(users)} className="btn btn-outline btn-md w-16 btn-error"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;