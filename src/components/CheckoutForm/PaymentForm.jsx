import React, { Fragment } from 'react';
import Review from '../../components/Review/Review';
import { Typography, Button, Divider } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import {
	Elements,
	CardElement,
	ElementsConsumer,
} from '@stripe/react-stripe-js';

const PaymentForm = ({ checkoutToken }) => {
	return (
		<Fragment>
			<Review checkoutToken={checkoutToken} />
		</Fragment>
	);
};

export default PaymentForm;
