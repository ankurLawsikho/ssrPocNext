import WebinarItem from "./webinar-item";
import classes from './webinar-list.module.css';

function WebinarList (props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(webinar => (
                <WebinarItem 
                    key={webinar._id}
                    id='e2'
                    title={webinar.name}
                    location={webinar.description}
                    date={webinar.updatedAt}
                    image="images/coding-event.jpg"
                />
            ))}
        </ul>
        
    );
}   

export default WebinarList;