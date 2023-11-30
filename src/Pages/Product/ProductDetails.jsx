import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    console.log(id);
    const { data: product } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/products/${id}`);
            return result.data;
        }
    })

    console.log(product);

    return (
        <div>

        </div>
    );
};

export default ProductDetails;