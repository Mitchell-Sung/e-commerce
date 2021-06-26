import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	media: {
		height: 260,
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cartActions: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
}));

export default useStyles;
