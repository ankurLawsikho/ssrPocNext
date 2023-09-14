import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from "react";

import { Fragment } from "react";
import WebinarList from '../../components/webinars/webinar-list';

function AllWebinarsPage (props) {
    const [webinars, setWebinars] = useState(props.webinars);
    const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR('http://localhost:8080/api/user/get-all-webinar', 
        (url) => fetch(url).then(res => res.json()));

    useEffect(() => {
        setIsLoading(true);  
        if (data) {
            const transFormedSales = data.payload ? data.payload : [];    
            setWebinars(transFormedSales);
            setIsLoading(false);
        }
    }, [data])

    let webinarPara = <p>No Course Available</p>
    if (webinars.length !== 0) {
        webinarPara = <WebinarList items = {webinars} />
    } 

    return (
        <Fragment>
            <h1 style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
            }}>Upcoming Bootcamps and Workshops</h1>
            
            {webinarPara}
        </Fragment>
    );
}


export async function getStaticProps () {
    const response = await fetch('http://localhost:8080/api/user/get-all-webinar');
    const data = await response.json();
    const transFormedSales = data.payload ? data.payload : [];

    return { 
        props: {
            webinars: transFormedSales
        }, 
        revalidate:10
    }
}

export default AllWebinarsPage;