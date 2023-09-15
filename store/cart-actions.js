import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://nextjs-course-d2792-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch card Data');
            }

            const data = await response.json();

            return data;
        }



        try {
            const cartData = await fetchData();
            console.log("cartData", cartData);
            if (cartData.items && cartData.items.length > 0) {
                dispatch(cartActions.replaceCart(cartData));
            }
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'fetching cart data failed!',
                })
            );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch( 
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://nextjs-course-d2792-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                }),
            });

            if (!response.ok) {
                throw new Error('Sending Cart Data Failed');
            }
        }
        
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
            );
        }
       
    }
}