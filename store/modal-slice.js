import { createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { 
        isLoginModal: false,
        isSignUpModal: false,
        isSignUpForCourseModal: false,
        isSignUpForServiceModal: false,
    },
    reducers: {
        closeModal (state) {
            state.isLoginModal = false;
            state.isSignUpModal = false;
            state.isSignUpForCourseModal = false;
            state.isSignUpForServiceModal = false;
        },
        openModal (state, action) {
            if (action.payload.modal === "isLoginModal") {
                state.isLoginModal = true;
                state.isSignUpModal = false;  
            }

            if (action.payload.modal === "isSignUpModal") {
                state.isLoginModal = false;
                state.isSignUpModal = true;    
            }

            if (action.payload.modal === "isSignUpForCourseModal") {
                state.isSignUpForCourseModal = true;
            }

            if (action.payload.modal === "isSignUpForServiceModal") {
                state.isSignUpForServiceModal = true;
            }
        }
    } 
});

export const modalActions = modalSlice.actions
export default modalSlice;

