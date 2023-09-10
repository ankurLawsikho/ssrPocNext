import { Fragment } from "react";
import { getFeaturedEvents } from '../dummy-data';
import FirstPage from "../components/home/first-page";


function HomePage () {
    const featuredEvents = getFeaturedEvents();

    return (
        <Fragment>
           <FirstPage />
        </Fragment>
    );
}

export default HomePage;