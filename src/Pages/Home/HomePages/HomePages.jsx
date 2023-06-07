import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

const HomePages = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM Fit SHOP
                </title>
            </Helmet>
            <Banner></Banner>
            
        </>
    );
};

export default HomePages;