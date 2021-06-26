import React, { Fragment, useState } from 'react';
import AddressForm from '../CheckoutForm/AddressForm';
import PaymentForm from '../CheckoutForm/PaymentForm';
import useStyles from './checkout.styles';
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

const Checkout = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(1);

	const Confirmation = () => {
		<div>Confirmation</div>;
	};

	const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

	return (
		<Fragment>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStepper={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <Confirmation /> : <Form />}
				</Paper>
			</main>
		</Fragment>
	);
};

export default Checkout;
