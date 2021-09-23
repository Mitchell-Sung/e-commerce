import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
	'pk_test_51J6pCKGzqgGhhMziXXLSSxtXbQxRVuY7fVfXXa9GLaEE5WLf9lOrxmPQNM6WVOULVUZ8sE6Kh7QnTK7stnpivwjg00Gsxe0Gcv';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
};

export default StripeContainer;
