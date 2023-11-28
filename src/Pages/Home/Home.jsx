import Banner from "./Banner/Banner";
import FeaturedProducts from "./Featured Products/FeaturedProducts";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;