import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: role } = useQuery({
        queryKey: ["role", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data
        }
    })
    return role;

};

export default useRole;