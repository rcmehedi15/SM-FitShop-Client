import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";




const HomePages = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM Fit SHOP
                </title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            
        </>
    );
};

export default HomePages;