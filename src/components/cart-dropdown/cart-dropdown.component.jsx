import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdwon = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

const mapStateToProps = () => ({
    
});

export default connect(
    mapStateToProps
)(CartDropdwon);