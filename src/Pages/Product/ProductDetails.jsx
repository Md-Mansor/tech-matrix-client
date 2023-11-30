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
            {
                <div className="pt-20">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={product?.image} alt={product?.name} />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{product?.name}</h2>
                            <p>Price: ${product?.price}</p>
                            <p>Brand: {product?.brand}</p>
                            <div className="">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p>{product?.description}</p>
                    </div>
                </div>
            }


        </div>
    );
};

export default ProductDetails;