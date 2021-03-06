import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';  
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
	  backgroundColor: '#f2f2f2',
	  padding: theme.spacing(3),
	  marginTop: theme.spacing(6),
	},
  }));

const Footer = () => {
	const classes = useStyles();
	const Copyright = () => {
		return (
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://material-ui.com/">
					Your Website
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		);
	}

	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				Footer
        </Typography>
			<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
				Something here to give the footer a purpose!
        </Typography>
			<Copyright />
		</footer>
	);
}

export default Footer;
