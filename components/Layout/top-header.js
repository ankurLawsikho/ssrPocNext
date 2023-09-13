import Link from 'next/link';
import classes from './main-header.module.css';
import Button from '../ui/button';
import LinkButton from '../ui/link-button';

function TopHeader (props) {
    return (
        <header className={classes.topheader}>
            <div className={classes.contactNo}>
                <Link href='/'>+91 93111 47267 (While dialing manually please prefix + before 91 i.e +919311147267)</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <LinkButton>Sign Up For Course</LinkButton> | 
                        <LinkButton>Sign Up for Service</LinkButton> | 
                        <LinkButton>Login</LinkButton> | 
                        <LinkButton>Sign Up</LinkButton>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default TopHeader;