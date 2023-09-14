import Link from 'next/link';
import classes from './main-header.module.css';
import Button from '../ui/button';
import LinkButton from '../ui/link-button';
import { useState } from 'react';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import apicall from '../../helper/apicall';


function TopHeader (props) {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isSignUpModal, setIsSignUpModal] = useState(false);
    const [isSignUpForCourseModal, setIsSignUpForCourseModal] = useState(false);
    const [isSignUpForServiceModal, setIsSignUpForServiceModal] = useState(false);

    const [nameForSignUp, setNameForSignUp] = useState("");
    const [emailForSignUp, setEmailForSignUp] = useState("");
    const [phoneForSignUp, setPhoneForSignUp] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companySize, setCompanySize] = useState("");

    const [msg, setMsg] = useState(null);

    const reSetMsg = () => {
        setNameForSignUp("");
        setEmailForSignUp("");
        setPhoneForSignUp("");
        setCompanyName("");
        setCompanySize("");
        setTimeout(() => {
            setMsg(null);
            setIsSignUpModal(false);
            setIsLoginModal(false);
            setIsSignUpForCourseModal(false);
            setIsSignUpForServiceModal(false);
        }, 3000)
    }

    // Form Submission //

    // For User Login up
    const userLoginFormHandler = async (e) => {
        e.preventDefault()
        
        if (!emailForSignUp) {
            setMsg("Enter Your Email !");
            return
        }

        let payload = {
            "email": emailForSignUp,
        }

        let responseDet = await apicall.userLigin(payload);
        console.log("responseDet ====", responseDet)
        if (responseDet.data && responseDet.data.code == 1) {
            setMsg("You will get an otp in your mail!");
        } else {
            setMsg("Please give a valid mail!");
        }
       
        reSetMsg()
    }


    // For Sign up
    const signUpFormHandler = async (e) => {
        e.preventDefault()
        
        if (!nameForSignUp) {
            setMsg("Enter Your name !");
            return
        }

        if (!emailForSignUp) {
            setMsg("Enter Your email !");
            return
        }

        if (!phoneForSignUp) {
            setMsg("Enter Your phone number !");
            return
        }


        let payload = {
            "name": nameForSignUp,
            "email": emailForSignUp,
            "phone": phoneForSignUp
        }

        let responseDet = await apicall.signUp(payload);
        console.log("responseDet ====", responseDet)
        setMsg("You are successfully Regisered in our system!");
        reSetMsg()
    }

    // For Sign up for course
    const signUpForCourseFormHandler = async (e) => {
        e.preventDefault()
        
        if (!nameForSignUp) {
            setMsg("Enter Your name !");
            return
        }

        if (!emailForSignUp) {
            setMsg("Enter Your email !");
            return
        }

        if (!phoneForSignUp) {
            setMsg("Enter Your phone number !");
            return
        }


        let payload = {
            "name": nameForSignUp,
            "email": emailForSignUp,
            "phone": phoneForSignUp,
            "typeOfUser": "forcourse"
        }

        let responseDet = await apicall.signUp(payload);
        console.log("responseDet ====", responseDet)
        setMsg("You are successfully Regisered in our system!");
        reSetMsg()
    }

    // For Sign up for Service
    const signUpForServiceFormHandler = async (e) => {
        e.preventDefault()
        
        if (!nameForSignUp) {
            setMsg("Enter Your name !");
            return
        }

        if (!emailForSignUp) {
            setMsg("Enter Your email !");
            return
        }

        if (!phoneForSignUp) {
            setMsg("Enter Your phone number !");
            return
        }

        if (!companyName) {
            setMsg("Enter Your company name!");
            return
        }

        if (!companySize) {
            setMsg("Enter Your company size !");
            return
        }


        let payload = {
            "name": nameForSignUp,
            "email": emailForSignUp,
            "phone": phoneForSignUp,
            "typeOfUser": "forservice",
            "companyName": companyName,
            "companySize": companySize
        }

        let responseDet = await apicall.signUp(payload);
        console.log("responseDet ====", responseDet)
        setMsg("You are successfully Regisered in our system!");
        reSetMsg()
    }
    


    // End Of Form Submission //
    
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
                                        placeholder='Eg: xyz@email.com'
                                        onChange={(e) => {
                                            setEmailForSignUp(e.target.value)
                                        }}
                                    />
                                </div>
                           </Col>
                        </Row>
                        {msg?<p style={{
                            color: 'red'
                        }}>{msg}</p>:''}
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }} onClick={(e) => userLoginFormHandler(e)}>
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
                                        Name:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: John Doe'
                                        onChange={(e) => {
                                            setNameForSignUp(e.target.value)
                                        }}
                                    />
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
                                        placeholder='Eg: xyz@email.com'
                                        onChange={(e) => {
                                            setEmailForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='phoneNumber'>
                                        Phone Number:
                                    </label>
                                    <input 
                                        type='number' 
                                        className='form-control'
                                        placeholder='Eg: 123456789'
                                        onChange={(e) => {
                                            setPhoneForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>
                        {msg?<p style={{
                            color: 'red'
                        }}>{msg}</p>:''}
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }} onClick={(e) => signUpFormHandler(e)}>
                            Send Otp
                        </button>

                    </form>
                </ModalBody>
            </Modal>  
            {/* End Sign Up Modal  */}


            {/* Sign Up for Course Modal */}
            <Modal size='lg' isOpen={isSignUpForCourseModal} toggle={() => setIsSignUpForCourseModal(!isSignUpForCourseModal)}>
                <ModalHeader><h1>Upskill yourself with Skill Arbitrage!</h1></ModalHeader>
                <ModalBody>
                    <form>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Your Name:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: John Doe'
                                        onChange={(e) => {
                                            setNameForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        Your Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: xyz@email.com'
                                        onChange={(e) => {
                                            setEmailForSignUp(e.target.value)
                                        }}
                                    />
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='phoneNumber'>
                                        Phone Number:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: 123456789'
                                        onChange={(e) => {
                                            setPhoneForSignUp(e.target.value)
                                        }}
                                    />
                                </div>
                           </Col>
                        </Row>

                        {msg?<p style={{
                            color: 'red'
                        }}>{msg}</p>:''}
                        <p>
                            By submitting this form, I agree to SkillArbitrage and its 
                            representatives contacting me through call, 
                            SMS, email or WhatsApp even if I am registered under NDNC. 
                            I also agree that I have read and understood the Terms of 
                            Service and agree to abide by the same
                        </p>
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }} onClick={(e) => signUpForCourseFormHandler(e)}>
                            Sign me Up
                        </button>
                    </form> 
                </ModalBody>
            </Modal>  
            {/* Sign Up for Course Modal  */}


            {/* Sign Up for Service Modal */}
            <Modal size='lg' isOpen={isSignUpForServiceModal} toggle={() => setIsSignUpForServiceModal(!isSignUpForServiceModal)}>
                <ModalHeader><h1>Upskill yourself with Skill Arbitrage!</h1></ModalHeader>
                <ModalBody>
                    <form>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Your Name:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: John Doe'
                                        onChange={(e) => {
                                            setNameForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        Your Email:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: xyz@email.com'
                                        onChange={(e) => {
                                            setEmailForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12}>
                                <div>
                                    <label htmlFor='phoneNumber'>
                                        Phone Number:
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control'
                                        placeholder='Eg: 123456789'
                                        onChange={(e) => {
                                            setPhoneForSignUp(e.target.value)
                                        }} />
                                </div>
                           </Col>
                        </Row>

                        <Row>
                            <Col lg={5}>
                                    <div>
                                        <label htmlFor='companyName'>
                                            Company Name:
                                        </label>
                                        <input 
                                            type='text' 
                                            className='form-control'
                                            placeholder='Eg: xyz company'
                                            onChange={(e) => {
                                                setCompanyName(e.target.value)
                                            }} />
                                    </div>
                            </Col>
                            <Col lg={5}>
                                    <div>
                                        <label htmlFor='companySize'>
                                            Company Size:
                                        </label>
                                        <input 
                                            type='number' 
                                            className='form-control'
                                            placeholder='Eg: 50'
                                            onChange={(e) => {
                                                setCompanySize(e.target.value)
                                            }} />
                                    </div>
                            </Col>
                        </Row>
                        <p>
                            By submitting this form, I agree to SkillArbitrage and its representatives 
                            contacting me through call, SMS, email or WhatsApp even if I am registered 
                            under NDNC. I also agree that I have read and understood the Terms of Service 
                            and agree to abide by the same
                        </p>
                        {msg?<p style={{
                            color: 'red'
                        }}>{msg}</p>:''}
                        <button className='btn mt-3' style={{
                            backgroundColor: '#0b3629',
                            color: 'white'
                        }} onClick={(e) => signUpForServiceFormHandler(e)}>
                            Sign me here
                        </button>
                    </form> 
                </ModalBody>
            </Modal>  
            {/* Sign Up for Service Modal  */}






            <div className={classes.contactNo}>
                <Link href='/'>+91 93111 47267 (While dialing manually please prefix + before 91 i.e +919311147267)</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <LinkButton onClick={() => {
                            setIsSignUpForCourseModal(true)
                        }}>Sign Up For Course</LinkButton> | 
                        <LinkButton onClick={() => {
                            setIsSignUpForServiceModal(true)
                        }}>Sign Up for Service</LinkButton> | 
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