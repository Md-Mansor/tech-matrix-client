import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";
import { MdRestorePage } from "react-icons/md";






const RecycleBin = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: deletedUsers = [], refetch } = useQuery({
        queryKey: ['deletedUsers'],
        queryFn: async () => {
            const result = await axiosSecure.get('/deletedUsers');
            return result.data
        }
    })

    const handelRestore = async (user) => {
        try {
            const res = await axiosSecure.delete(`/deletedUsers/${user._id}`);
            console.log(res);
            if (res.data.deletedCount > 0) {

                await axiosSecure.post('/users', { user })
                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Total Deleted Users {deletedUsers.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Restore</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deletedUsers.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th>
                                    <button onClick={() => handelRestore(user)} className="btn btn-wide btn-error  hover:btn-info">
                                        <MdRestorePage />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecycleBin;