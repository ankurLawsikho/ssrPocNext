import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
import CourseDetail from "../../components/courses/course-detail";



function CourseDetailPage (props) {
   
    const [courseDetail, setCourseDetail] = useState(props.courseDetail);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const title = router.query.title;

    const { data, error } = useSWR('http://localhost:8080/api/user/get-course-by-name/'+title, 
        (url) => fetch(url).then(res => res.json()));

    useEffect(() => {
        setIsLoading(true);  
        if (data) {
            const transFormedData = data.payload ? data.payload : [];    
            setCourseDetail(transFormedData);
            setIsLoading(false);
        }
    }, [data])

    if (courseDetail.length === 0) {
        return (
            <Fragment>
                <h1>No Course Found</h1>
            </Fragment>
        );
    }



    return (
        <Fragment>
            <CourseDetail course={courseDetail[0]}/>
        </Fragment>
    );
}


export default CourseDetailPage;

export async function getServerSideProps(context) {
    const { params } = context;
    const response = await fetch('http://localhost:8080/api/user/get-course-by-name/'+params.title);
    const data = await response.json();
    let courseDetail = []

    if (data.code === 1) {
        courseDetail = data.payload
    }
    
    return {
        props: {
            courseDetail: courseDetail
        }
    }
}