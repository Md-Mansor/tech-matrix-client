import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const FeaturedProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featured = [] } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const result = await axiosPublic.get('/product/featured');
            return result.data;
        }
    })
    return (
        <div>
            <div className="text-center">
                <h1 className="font-semibold text-4xl underline  decoration-double">Features Products</h1>
                <p className="font-medium text-2xl hover:tracking-wide m-2 ">Get Your Desired Product from Featured Product Section</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
                {
                    featured.map(features => <div key={features._id} className="card  glass">
                        <figure data-aos="fade-up"
                            data-aos-anchor-placement="top-center"><img src={features.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{features.name}</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                                <Link to='/'>
                                    <button className="btn btn-primary">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default FeaturedProducts;