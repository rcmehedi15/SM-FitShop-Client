import { Helmet } from "react-helmet";
// import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AboutUs from "../AboutUs/AboutUs";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import OpenFacilites from "../OpenFacilites/OpenFacilites";




const HomePages = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM Fit SHOP
                </title>
            </Helmet>
            {/* <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors> */}
            <AboutUs></AboutUs>
            <OpenFacilites></OpenFacilites>
            <Pricing></Pricing>
            <Testimonial></Testimonial>

            
        </>
    );
};

export default HomePages;