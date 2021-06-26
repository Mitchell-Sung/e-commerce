import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './product.styles';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';

// product from Products.jsx file.
const Product = ({ product }) => {
	const classes = useStyles();

	// product data from commerceJs library.
	console.log('product :>> ', product);

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='h5'>
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant='body2'
					color='textSecondary'
				/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton aria-label='Add to Cart'>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
