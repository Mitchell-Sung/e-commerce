import React, { Fragment, useState, useEffect } from 'react';
import AddressForm from '../CheckoutForm/AddressForm';
import PaymentForm from '../CheckoutForm/PaymentForm';
import useStyles from './checkout.styles';
import { commerce } from '../../lib/commerce';
import {
	CssBaseline,
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from '@material-ui/core';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {
					type: 'cart',
				});
				console.log('CHECKOUT CONSOLE :>> ', token);
				setCheckoutToken(token);
			} catch (error) {
				console.error(error);
			}
		};
		generateToken();
	}, [cart]);

	const Confirmation = () => {
		<div>Confirmation</div>;
	};

	const Form = () =>
		activeStep === 0 ? (
			<AddressForm checkoutToken={checkoutToken} />
		) : (
			<PaymentForm />
		);

	return (
		<Fragment>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<Confirmation />
					) : (
						checkoutToken && <Form />
					)}
				</Paper>
			</main>
		</Fragment>
	);
};

export default Checkout;
