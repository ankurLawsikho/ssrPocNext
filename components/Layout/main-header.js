import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader (props) {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>SkillArbitrage</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/">Home</Link> | 
                        <Link href="/events">Courses</Link> | 
                        <Link href="/about-us">About Us</Link> |
                        <Link href="/about-us">Webinar</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;