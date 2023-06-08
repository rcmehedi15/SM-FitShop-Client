import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AboutUs from "../AboutUs/AboutUs";
import Pricing from "../Pricing/Pricing";
import OpenFacilites from "../OpenFacilites/OpenFacilites";
import WhyChoose from "../WhyChoose/WhyChoose";





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
            <AboutUs></AboutUs>
            <OpenFacilites></OpenFacilites>
            <Pricing></Pricing>
            <WhyChoose></WhyChoose>




        </>
    );
};

export default HomePages;