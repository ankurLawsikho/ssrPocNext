import classes from './course-item.module.css';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from '../icons/arrow-right-icon';


function CourseItem (props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/courses/${title}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summery}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                    <div className={classes.actions}>
                        <Button link={exploreLink}>
                            <span>Enroll Now</span>
                            <span className={classes.icon}>
                                <ArrowRightIcon />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CourseItem;