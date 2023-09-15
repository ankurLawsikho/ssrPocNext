import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import classes from './main-header.module.css';
import LinkButton from '../ui/link-button';
import { modalActions } from '../../store/modal-slice';
import ModalPopup from '../modal/modal-popup';



function TopHeader (props) {
   
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();
    
    return (
        <header className={classes.topheader}>
      
            {(modal.isLoginModal || modal.isSignUpModal || modal.isSignUpForCourseModal || modal.isSignUpForServiceModal) && <ModalPopup />}
            <div className={classes.contactNo}>
                <Link href='/'>+91 93111 47267 (While dialing manually please prefix + before 91 i.e +919311147267)</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <LinkButton onClick={() => {
                            dispatch(modalActions.openModal({"modal": "isSignUpForCourseModal"}))
                        }}>Sign Up For Course</LinkButton> | 
                        <LinkButton onClick={() => {
                            dispatch(modalActions.openModal({"modal": "isSignUpForServiceModal"}))
                        }}>Sign Up for Service</LinkButton> | 
                        <LinkButton onClick={
                            () => {
                                dispatch(modalActions.openModal({"modal": "isLoginModal"}))
                            }
                        }>Login</LinkButton> | 
                        <LinkButton onClick={() => {
                            dispatch(modalActions.openModal({"modal": "isSignUpModal"}))
                        }}>Sign Up</LinkButton>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default TopHeader;