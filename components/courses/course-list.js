import CourseItem from "./course-item";
import classes from './course-list.module.css';

function CourseList (props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(course => (
                <CourseItem 
                    key={course._id}
                    id='e2'
                    title={course.name}
                    location={course.description}
                    date={course.updatedAt}
                    image="images/coding-event.jpg"
                />
            ))}
        </ul>
        
    );
}   

export default CourseList;