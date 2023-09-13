import Link from "next/link";
import classes from './button.module.css';


function LinkButton (props) {

    if (props.link) {
        return (
            <Link href={props.link} className={classes.linkbtn}>
                {props.children}
            </Link>
        )
    }

    return <button className={classes.linkbtn} onClick={props.onClick}>{props.children}</button>
    
}

export default LinkButton;