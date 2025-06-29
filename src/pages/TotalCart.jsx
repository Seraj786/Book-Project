import React, { useEffect } from 'react'
import { getTotal } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const TotalCart = () => {
    const dispatch = useDispatch();
    const { cartGetTotal } = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(getTotal());
    }, [dispatch]);
    return (
        <div className="cart-detail-price">
            <h2 className="mb-4">Cart Subtotal</h2>
            <table class="table-bordered check-tbl w-100 m-b25">
                <tbody>
                    <tr>
                        <td>Order Subtotal</td>
                        <td>${cartGetTotal}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free Shipping</td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>${cartGetTotal}</td>
                    </tr>
                </tbody>
            </table>

            <div className="process-to-checkout justify-content-center d-flex mt-4">
                <Link to="/shop" className="main-btn me-2">Continue Shopping</Link>
                <Link to="/checkout" className="main-btn ">Process to checkout</Link>
            </div>

        </div>

    )
}

export default TotalCart
