import React, { Fragment, useState, useEffect } from 'react';
import FormInput from '../Checkout/FormInput';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';

const AddressForm = ({ checkoutToken }) => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState('');
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState('');
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState('');
	const methods = useForm();

	const countries = Object.entries(shippingCountries).map(([code, name]) => ({
		id: code,
		label: name,
	}));
	//console.log('countries :>> ', countries);

	const fetchShippingCountries = async (checkoutTokenId) => {
		const { countries } = await commerce.services.localeListShippingCountries(
			checkoutTokenId
		);
		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries)[0]);
	};

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	return (
		<Fragment>
			<Typography variant='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit=''>
					<Grid container spacing={3}>
						<FormInput required name='firstName' label='First name' />
						<FormInput required name='lastName' label='Last name' />
						<FormInput required name='address1' label='Address' />
						<FormInput required name='email' label='Email' />
						<FormInput required name='city' label='City' />
						<FormInput required name='zip' label='ZIP / Postal code' />

						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={(e) => setShippingCountry(e.target.value)}
							>
								{countries.map((country) => (
									<MenuItem key={country.id} value={country.id}>
										{country.label}
									</MenuItem>
								))}
							</Select>
						</Grid>

						{/* <Grid item xs={12} sm={6}>
							<InputLabel>Shipping Subdivision</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
						</Grid> */}

						{/* <Grid item xs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
						</Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</Fragment>
	);
};

export default AddressForm;

// note: react hook form and react redux form