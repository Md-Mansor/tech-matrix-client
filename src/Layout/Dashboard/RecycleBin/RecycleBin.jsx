import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";
import { MdRestorePage } from "react-icons/md";





const RecycleBin = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: deletedUsers = [] } = useQuery({
        queryKey: ['deletedUsers'],
        queryFn: async () => {
            const result = await axiosSecure.get('/deletedUsers');
            return result.data
        }
    })
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
                            deletedUsers.map((users, index) => <tr key={users._id}>
                                <th>{index + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <th>
                                    <button className="btn btn-wide btn-error  hover:btn-info">
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