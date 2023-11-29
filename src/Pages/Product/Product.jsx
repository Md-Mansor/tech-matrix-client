import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const Product = () => {

    // const axiosSecure = useAxiosPrivate();
    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const result = await axiosSecure.get('/users');
    //         return result.data;
    //     }
    // })
    const axiosPublic = useAxiosPublic();
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await axiosPublic.get('/products');
            return result.data;
        }
    })

    return (
        <div className="p-5">
            <div className="text-center font-medium text-2xl mt-20">
                <h1>All Product will appear here</h1>
                <p>Total Products : {products.length}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                {
                    products.map(product => <div key={products.id} className="hover:shadow-amber-200 transition duration-300 ease-in-out">
                        <div className="card shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.Image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.Name}</h2>
                                <p>Price : $ {product.Price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>

        </div>
    );
};

export default Product;