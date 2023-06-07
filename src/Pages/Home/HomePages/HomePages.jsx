import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";


const HomePages = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM Fit SHOP
                </title>
            </Helmet>
            <Slider></Slider>
            
        </>
    );
};

export default HomePages;