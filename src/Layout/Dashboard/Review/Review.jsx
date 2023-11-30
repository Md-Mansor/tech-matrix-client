import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";


const Review = () => {

    const axiosSecure = useAxiosPrivate();
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await axiosSecure.get('/products');
            return result.data
        }
    })
    const handelMakeFeatured = (product) => {
        axiosSecure.patch(`/products/featured/${product._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div>
                <h1>Make Products As Features </h1>
                <h1>Accept Products request for add add</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Make Features</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                products.map((product, idx) => <tr key={product._id}>
                                    <th>{idx + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.featured === "true" ? "Featured" : (
                                        <div>
                                            <button disabled={product.status === "pending"} onClick={() => handelMakeFeatured(product)} className="btn btn-primary" >
                                                Make Featured
                                            </button>
                                        </div>
                                    )}</td>


                                    <td>{product.status === "Verified" ? "Verified" : (
                                        <div>
                                            <button className="btn btn-secondary">Pending</button>
                                        </div>
                                    )}
                                    </td>
                                    <td>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Review;

