import classes from './modal.module.css';
import { Modal, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function loginModal (props) {

    const [modal, setModal] = useState(true);
    return (
        <>
            <Modal size='lg' 
                isOpen={modal}
                toggle={() => setModal(!modal)}>
                <ModalHeader>
                    <h1>Login to your lawsikho account!</h1>
                </ModalHeader>
            </Modal>
            
        </>
    )
}

export default loginModal;