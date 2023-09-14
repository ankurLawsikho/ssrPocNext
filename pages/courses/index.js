import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from "react";

import { Fragment } from "react";
import CourseList from '../../components/courses/course-list';

function AllCoursesPage (props) {
    const [courses, setCourses] = useState(props.courses);
    const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR('http://localhost:8080/api/user/get-all-course', 
        (url) => fetch(url).then(res => res.json()));

    useEffect(() => {
        setIsLoading(true);  
        if (data) {
            const transFormedSales = data.payload ? data.payload : [];    
            setCourses(transFormedSales);
            setIsLoading(false);
        }
    }, [data])

    let coursePara = <p>No Course Available</p>
    if (courses.length !== 0) {
        coursePara = <CourseList items = {courses} />
    } 

    return (
        <Fragment>
            {coursePara}
        </Fragment>
    );
}


export async function getStaticProps () {
    const response = await fetch('http://localhost:8080/api/user/get-all-course');
    const data = await response.json();
    const transFormedSales = data.payload ? data.payload : [];

    return { 
        props: {
            courses: transFormedSales
        }, 
        revalidate:10
    }
}

export default AllCoursesPage;