import Link from 'next/link';
import classes from './main-header.module.css';
import Button from '../ui/button';
import LinkButton from '../ui/link-button';
import { useState } from 'react';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


function TopHeader (props) {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isSignUpModal, setIsSignUpModal] = useState(false);
    
    // Here, we are defining login modal
    




    return (
        <header className={classes.topheader}>
 
            {/* Login Modal     */}
            <Modal size='lg' isOpen={isLoginModal} toggle={() => setIsLoginModal(!isLoginModal)}>
                <ModalHeader><h1>Login to your lawsikho account!</h1></ModalHeader>
                <ModalBody>
                    <form>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: xyz@email.com'/>
                                </div>
                           </Col>
                        </Row>
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }}>
                            Send Otp
                        </button>
                    </form>
                </ModalBody>
            </Modal>  
            {/* End Login Modal  */}


            {/* Sign Up Modal     */}
            <Modal size='lg' isOpen={isSignUpModal} toggle={() => setIsSignUpModal(!isSignUpModal)}>
                <ModalHeader><h1>Create your skillArbitrage account!</h1></ModalHeader>
                <ModalBody>
                    <form>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: John Doe'/>
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: xyz@email.com'/>
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='phoneNumber'>
                                        Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: 123456789'/>
                                </div>
                           </Col>
                        </Row>
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }}>
                            Send Otp
                        </button>
                    </form>
                </ModalBody>
            </Modal>  
            {/* End Sign Up Modal  */}






            <div className={classes.contactNo}>
                <Link href='/'>+91 93111 47267 (While dialing manually please prefix + before 91 i.e +919311147267)</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <LinkButton>Sign Up For Course</LinkButton> | 
                        <LinkButton>Sign Up for Service</LinkButton> | 
                        <LinkButton onClick={
                            () => {
                                setIsLoginModal(true)
                            }
                        }>Login</LinkButton> | 
                        <LinkButton onClick={
                            () => {
                                setIsSignUpModal(true)
                            }
                        }>Sign Up</LinkButton>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default TopHeader;