import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";


const Users = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })
    return (
        <div>
            <h1>Total Users :{users.length}</h1>
        </div>
    );
};

export default Users;