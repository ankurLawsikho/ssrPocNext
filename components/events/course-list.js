import EventItem from "./event-item";
import classes from './event-list.module.css';

function CourseList (props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(course => (
                <EventItem 
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