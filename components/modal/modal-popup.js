import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import classes from './modal.module.css';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { modalActions } from '../../store/modal-slice';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import apicall from '../../helper/apicall';

function ModalPopup (props) {
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const [nameForSignUp, setNameForSignUp] = useState("");
    const [emailForSignUp, setEmailForSignUp] = useState("");
    const [phoneForSignUp, setPhoneForSignUp] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companySize, setCompanySize] = useState("");

    const [valid, setValid] = useState(true);
    const [msg, setMsg] = useState(null);

    const handleChange = (value) => {
        setPhoneForSignUp(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneForSignUp) => {
        const phoneNumberPattern = /^\d{12}$/; // Validates a 10-digit phone number

        return phoneNumberPattern.test(phoneForSignUp);
    };

    const reSetMsg = () => {
        setNameForSignUp("");
        setEmailForSignUp("");
        setPhoneForSignUp("");
        setCompanyName("");
        setCompanySize("");
        setTimeout(() => {
            setMsg(null);
            dispatch(modalActions.closeModal())
        }, 3000)
    }

    // For Login
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

        if (!phoneForSignUp || !valid) {
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

        if (!phoneForSignUp || !valid) {
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

        if (!phoneForSignUp || !valid) {
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
    

    const loginModalBody = <>
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
            <p>
                New user? Get registered ! 
                <a style={{color: 'red'}} 
                    onClick={() => {dispatch(modalActions.openModal({"modal": "isSignUpModal"}))}}>
                        Sign Up
                </a>
            </p>
        </form>
    </ModalBody>
    </>;

    const signUpModalBody = <>
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
                            <PhoneInput
                                country={'in'}
                                value={phoneForSignUp}
                                onChange={handleChange}
                                inputProps={{
                                    required: true,
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                {!valid && <p>Please enter a valid 10-digit phone number.</p>}
                {msg?<p style={{
                    color: 'red'
                }}>{msg}</p>:''}
                <button className='btn mt-3' style={{
                    backgroundColor: '#0b3629',
                    color: 'white'
                }} onClick={(e) => signUpFormHandler(e)}>
                    Send Otp
                </button>
                <p>Already member? login here! 
                    <a style={{color: 'red'}} 
                        onClick={() => {dispatch(modalActions.openModal({"modal": "isLoginModal"}))}}>
                            Log in
                    </a>
                </p>
            </form>
        </ModalBody>
    </>

    const signUpForCourseModalBody = <>
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
                                    <PhoneInput
                                        country={'in'}
                                        value={phoneForSignUp}
                                        onChange={handleChange}
                                        inputProps={{
                                            required: true,
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {!valid && <p>Please enter a valid 10-digit phone number.</p>}

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
    </>

    const signUpForServiceModalVody = <>
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
                                    <PhoneInput
                                        country={'in'}
                                        value={phoneForSignUp}
                                        onChange={handleChange}
                                        inputProps={{
                                            required: true,
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {!valid && <p>Please enter a valid 10-digit phone number.</p>}

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
    </>;


    return (
        <>
           <Modal size='lg' 
                isOpen={modal.isLoginModal || modal.isSignUpModal || modal.isSignUpForCourseModal || modal.isSignUpForServiceModal} 
                toggle={() => dispatch(modalActions.closeModal())}>
                {modal.isLoginModal && loginModalBody}
                {modal.isSignUpModal && signUpModalBody}
                {modal.isSignUpForCourseModal && signUpForCourseModalBody}
                {modal.isSignUpForServiceModal && signUpForServiceModalVody}     
            </Modal>   
        </>
    )
}

export default ModalPopup;