import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";


const HomePages = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM Fit SHOP
                </title>
            </Helmet>
            {/* <Slider></Slider> */}
            <Popular></Popular>
            
        </>
    );
};

export default HomePages;