import React from 'react';
import useStyles from './products.styles';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import img_xps13 from '../../assets/images/xps13.jpg';
import img_xps15 from '../../assets/images/xps15.jpg';
import img_xps17 from '../../assets/images/xps17.jpg';
import img_macbookAir13 from '../../assets/images/macbookAir13.jpg';
import img_macbookPro14 from '../../assets/images/macbookPro14.jpg';
import img_macbookPro16 from '../../assets/images/macbookPro16.jpg';

const products = [
	{
		id: 1,
		name: 'Dell xps 13',
		description: 'Screen Size 13',
		price: '$1,000',
		image: img_xps13,
	},
	{
		id: 2,
		name: 'Dell xps 15',
		description: 'Screen Size 15.',
		price: '$1,200',
		image: img_xps15,
	},
	{
		id: 3,
		name: 'Dell xps 17',
		description: 'Screen Size 17.',
		price: '$1,700',
		image: img_xps17,
	},
	{
		id: 4,
		name: 'Macbook air 13',
		description: 'Screen Size 13.',
		price: '$1,800',
		image: img_macbookAir13,
	},
	{
		id: 5,
		name: 'Macbook pro 14',
		description: 'Screen Size 14',
		price: '$1,900',
		image: img_macbookPro14,
	},
	{
		id: 6,
		name: 'Macbook pro 16',
		description: 'Screen Size 16',
		price: '$2,000',
		image: img_macbookPro16,
	},
];

const Products = () => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
