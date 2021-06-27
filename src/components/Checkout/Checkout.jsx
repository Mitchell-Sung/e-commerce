import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
	const classes = useStyles();
	const history = useHistory();

	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [shippingData, setShippingData] = useState({});
	const [isFinished, setIsFinished] = useState(false);

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {
					type: 'cart',
				});
				setCheckoutToken(token);
			} catch (error) {
				history.pushState('/');
			}
		};
		generateToken();
	}, [cart]);

	const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	const next = (data) => {
		setShippingData(data);
		nextStep();
	};

	const timeout = () => {
		setTimeout(() => {
			setIsFinished(true);
		}, 3000);
	};

	let Confirmation = () =>
		order.customer ? (
			<Fragment>
				<div>
					<Typography variant='h5'>
						Thank you for your purchase,
						{order.customer.firstname},{order.customer.lastname},
					</Typography>
					<Divider className={classes.divider} />
					<Typography variant='subtitle2'>
						Order ref: {order.customer_reference}
					</Typography>
				</div>
				<br />
				<Button component={Link} to='/' variant='outlined' type='button'>
					Back to Home
				</Button>
			</Fragment>
		) : isFinished ? (
			<Fragment>
				<div>
					<Typography variant='h5'>Thank you for your purchase</Typography>
					<Divider className={classes.divider} />
				</div>
				<br />
				<Button component={Link} to='/' variant='outlined' type='button'>
					Back to Home
				</Button>
			</Fragment>
		) : (
			<div className={classes.spinner}>
				<CircularProgress />
			</div>
		);

	if (error) {
		<Fragment>
			<Typography variant='h5'>Error: {error}</Typography>
			<br />
			<Button component={Link} to='/' variant='outlined' type='button'>
				Back to Home
			</Button>
		</Fragment>;
	}

	const Form = () =>
		activeStep === 0 ? (
			<AddressForm checkoutToken={checkoutToken} next={next} />
		) : (
			<PaymentForm
				shippingData={shippingData}
				checkoutToken={checkoutToken}
				backStep={backStep}
				onCaptureCheckout={onCaptureCheckout}
				nextStep={nextStep}
				timeout={timeout}
			/>
		);

	return (
		<Fragment>
			<CssBaseline />
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
